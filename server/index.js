import express from 'express';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { WebSocketServer, WebSocket } from 'ws';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbService } from './firebase.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Active WebSocket Clients
// map ws -> { role: 'admin' | 'student', name: string, id: string }
const clients = new Map();

// Global Live State
let liveState = {
  activeInterrupt: null,
  activeLockedQuiz: null,
  studentStatus: {
    online: false,
    name: 'Katelyn Xhin',
    currentModuleId: 'anph111_week1',
    currentSectionTitle: 'Laboratory Hazards & Risk Recognition',
    scrollProgress: 0,
    lastSeen: Date.now(),
    currentReadingTimeSec: 0,
    activeQuizTier: 10,
    mistakesCount: 0
  },
  quizSubmissions: [],
  interruptQueue: []
};

// Load persisted quiz submissions on startup
(async () => {
  try {
    const submissions = await dbService.getQuizSubmissions();
    if (submissions.length > 0) {
      liveState.quizSubmissions = submissions;
      console.log(`[Server] Loaded ${submissions.length} persisted quiz submissions.`);
    }
  } catch (e) {
    console.error('[Server] Error loading quiz submissions:', e);
  }
})();

// Broadcast helper
function broadcast(data, filterFn = null) {
  const msg = JSON.stringify(data);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      if (!filterFn || filterFn(client, clients.get(client))) {
        client.send(msg);
      }
    }
  });
}

function broadcastToStudents(data) {
  broadcast(data, (ws, meta) => meta?.role === 'student');
}

function broadcastToAdmins(data) {
  broadcast(data, (ws, meta) => meta?.role === 'admin');
}

wss.on('connection', (ws) => {
  console.log('[WS] New connection established');

  ws.on('message', async (message) => {
    try {
      const data = JSON.parse(message.toString());

      switch (data.type) {
        case 'REGISTER_ROLE': {
          const { role, name } = data.payload;
          clients.set(ws, { role, name, id: Math.random().toString(36).substring(7) });
          console.log(`[WS] Client registered as: ${role} (${name})`);

          if (role === 'student') {
            liveState.studentStatus.online = true;
            liveState.studentStatus.lastSeen = Date.now();
            broadcastToAdmins({
              type: 'STUDENT_PRESENCE_UPDATE',
              payload: liveState.studentStatus
            });
          }

          // Send current state to newly connected client
          ws.send(JSON.stringify({
            type: 'STATE_INIT',
            payload: {
              activeInterrupt: liveState.activeInterrupt,
              activeLockedQuiz: liveState.activeLockedQuiz,
              studentStatus: liveState.studentStatus,
              isFirebaseLive: dbService.isLiveFirebase()
            }
          }));
          break;
        }

        case 'TRIGGER_INTERRUPT': {
          const interruptPayload = {
            id: 'int_' + Date.now(),
            timestamp: Date.now(),
            technique: data.payload.technique || 'socratic',
            title: data.payload.title || 'Cognitive Checkpoint',
            prompt: data.payload.prompt,
            context: data.payload.context || '',
            guide: data.payload.guide || '',
            triggerSource: data.payload.triggerSource || 'admin',
            required: true,
            status: 'pending'
          };

          liveState.activeInterrupt = interruptPayload;

          broadcast({
            type: 'INTERRUPT_TRIGGERED',
            payload: interruptPayload
          });
          break;
        }

        case 'TRIGGER_LOCKED_QUIZ': {
          const quizPayload = {
            id: 'quiz_' + Date.now(),
            tier: data.payload.tier || 10,
            title: data.payload.title || `ANPH111 Laboratory Quiz (${data.payload.tier || 10} Items)`,
            questions: data.payload.questions || [],
            triggeredBy: data.payload.triggeredBy || 'admin',
            timestamp: Date.now(),
            required: true
          };

          liveState.activeLockedQuiz = quizPayload;

          broadcast({
            type: 'LOCKED_QUIZ_TRIGGERED',
            payload: quizPayload
          });
          break;
        }

        case 'SUBMIT_STUDENT_ANSWER': {
          const { interruptId, answer, timeTakenSeconds } = data.payload;

          const responseRecord = {
            id: interruptId || ('resp_' + Date.now()),
            interruptId,
            studentName: 'Katelyn Xhin',
            answer,
            technique: liveState.activeInterrupt?.technique || 'socratic',
            prompt: liveState.activeInterrupt?.prompt || 'Lesson reflection question',
            context: liveState.activeInterrupt?.context || '',
            guide: liveState.activeInterrupt?.guide || '',
            timeTakenSeconds: timeTakenSeconds || 0,
            submittedAt: new Date().toISOString(),
            feedback: null
          };

          await dbService.recordInterruptAnswer(responseRecord);
          liveState.activeInterrupt = null;

          broadcast({
            type: 'INTERRUPT_RESOLVED',
            payload: { interruptId, responseRecord }
          });
          break;
        }

        case 'SUBMIT_LOCKED_QUIZ': {
          const { quizId, answers, score, totalQuestions, questions } = data.payload;

          const submissionRecord = {
            id: quizId || ('sub_' + Date.now()),
            studentName: 'Katelyn Xhin',
            tier: totalQuestions || 10,
            score: score || 0,
            totalQuestions: totalQuestions || 10,
            answers: answers || {},
            questions: questions || liveState.activeLockedQuiz?.questions || [],
            submittedAt: new Date().toISOString(),
            tutorFeedback: null
          };

          liveState.quizSubmissions.unshift(submissionRecord);
          liveState.activeLockedQuiz = null;

          // Persist to Firestore / local JSON
          await dbService.saveQuizSubmission(submissionRecord);

          broadcast({
            type: 'LOCKED_QUIZ_RESOLVED',
            payload: { quizId, submissionRecord }
          });
          break;
        }

        case 'TUTOR_FEEDBACK': {
          const { interruptId, rating, notes } = data.payload;
          await dbService.updateInterruptFeedback(interruptId, { rating, notes, givenAt: new Date().toISOString() });

          broadcast({
            type: 'FEEDBACK_RECEIVED',
            payload: { interruptId, feedback: { rating, notes } }
          });
          break;
        }

        case 'STUDENT_PROGRESS_SYNC': {
          const { moduleId, sectionTitle, scrollProgress, readingTimeSec, activeQuizTier, mistakesCount } = data.payload;
          liveState.studentStatus = {
            ...liveState.studentStatus,
            online: true,
            currentModuleId: moduleId || liveState.studentStatus.currentModuleId,
            currentSectionTitle: sectionTitle || liveState.studentStatus.currentSectionTitle,
            scrollProgress: scrollProgress ?? liveState.studentStatus.scrollProgress,
            currentReadingTimeSec: readingTimeSec ?? liveState.studentStatus.currentReadingTimeSec,
            activeQuizTier: activeQuizTier ?? liveState.studentStatus.activeQuizTier,
            mistakesCount: mistakesCount ?? liveState.studentStatus.mistakesCount,
            lastSeen: Date.now()
          };

          await dbService.saveProgress('katelyn', liveState.studentStatus);

          broadcastToAdmins({
            type: 'STUDENT_PRESENCE_UPDATE',
            payload: liveState.studentStatus
          });
          break;
        }

        case 'SYNC_MISTAKE_LOG': {
          const { mistakes } = data.payload;
          if (Array.isArray(mistakes)) {
            await dbService.saveMistakeLog(mistakes);
          }
          break;
        }

        case 'GET_MISTAKE_LOG': {
          const mistakes = await dbService.getMistakeLog();
          ws.send(JSON.stringify({
            type: 'MISTAKE_LOG_LOADED',
            payload: { mistakes }
          }));
          break;
        }

        case 'DISMISS_INTERRUPT': {
          liveState.activeInterrupt = null;
          broadcast({
            type: 'INTERRUPT_DISMISSED',
            payload: {}
          });
          break;
        }

        case 'DISMISS_LOCKED_QUIZ': {
          liveState.activeLockedQuiz = null;
          broadcast({
            type: 'LOCKED_QUIZ_DISMISSED',
            payload: {}
          });
          break;
        }

        default:
          break;
      }
    } catch (err) {
      console.error('[WS] Error processing message:', err);
    }
  });

  ws.on('close', () => {
    const meta = clients.get(ws);
    if (meta && meta.role === 'student') {
      liveState.studentStatus.online = false;
      broadcastToAdmins({
        type: 'STUDENT_PRESENCE_UPDATE',
        payload: liveState.studentStatus
      });
    }
    clients.delete(ws);
  });
});

// ─────────────────────────────────────────────
// REST Endpoints
// ─────────────────────────────────────────────

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: Date.now(),
    isFirebaseLive: dbService.isLiveFirebase(),
    activeClients: clients.size,
    studentStatus: liveState.studentStatus
  });
});

// Auth: Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  const user = await dbService.verifyPassword(email, password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  res.json({ user });
});

// Auth: Seed accounts (first-time setup)
app.post('/api/auth/seed', async (req, res) => {
  const { adminEmail, adminPassword, studentEmail, studentPassword } = req.body;

  if (!adminEmail || !adminPassword || !studentEmail || !studentPassword) {
    return res.status(400).json({ error: 'All fields are required: adminEmail, adminPassword, studentEmail, studentPassword' });
  }

  try {
    const accounts = await dbService.seedAccounts(adminEmail, adminPassword, studentEmail, studentPassword);
    res.json({ success: true, accounts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Auth: Change password
app.post('/api/auth/change-password', async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;

  if (!email || !currentPassword || !newPassword) {
    return res.status(400).json({ error: 'email, currentPassword, and newPassword are required' });
  }

  const user = await dbService.verifyPassword(email, currentPassword);
  if (!user) {
    return res.status(401).json({ error: 'Current password is incorrect' });
  }

  await dbService.updateUserPassword(email, newPassword);
  res.json({ success: true });
});

// Responses feed
app.get('/api/admin/responses', async (req, res) => {
  const history = await dbService.getInterruptHistory();
  res.json(history);
});

// Quiz submissions feed
app.get('/api/admin/quiz-submissions', async (req, res) => {
  const submissions = await dbService.getQuizSubmissions();
  res.json(submissions);
});

// Student status
app.get('/api/student/status', async (req, res) => {
  const progress = await dbService.getProgress('katelyn');
  res.json({
    live: liveState.studentStatus,
    saved: progress
  });
});

// Mistake log
app.get('/api/student/mistakes', async (req, res) => {
  const mistakes = await dbService.getMistakeLog();
  res.json(mistakes);
});

// ─────────────────────────────────────────────
// Production: Serve built Vite frontend & SPA fallback
// ─────────────────────────────────────────────
const distPath = path.join(__dirname, '..', 'dist');

app.use(express.static(distPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>TutorSystem Starting...</title>
          <meta http-equiv="refresh" content="3">
          <style>
            body { font-family: system-ui; display: flex; height: 100vh; align-items: center; justify-content: center; background: #FCFAF8; color: #2D2926; margin: 0; }
            .card { text-align: center; padding: 2rem; background: #fff; border-radius: 16px; border: 1px solid rgba(232, 122, 144, 0.2); }
          </style>
        </head>
        <body>
          <div class="card">
            <h2>🌸 TutorSystem is compiling...</h2>
            <p>Please wait a moment. This page will refresh automatically.</p>
          </div>
        </body>
      </html>
    `);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[TutorSystem Server] Running on http://localhost:${PORT}`);
  console.log(`[TutorSystem Server] WebSocket Server listening on ws://localhost:${PORT}`);
});
