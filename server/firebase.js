import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db = null;
let auth = null;
let isRealFirebase = false;

// Attempt to load service account credentials if provided in env or file
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT || path.join(__dirname, 'firebase-key.json');

try {
  if (fs.existsSync(serviceAccountPath)) {
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    db = admin.firestore();
    auth = admin.auth();
    isRealFirebase = true;
    console.log('[Firebase] Connected to live Firebase Firestore & Auth.');
  } else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    });
    db = admin.firestore();
    auth = admin.auth();
    isRealFirebase = true;
    console.log('[Firebase] Connected to live Firebase via environment variables.');
  } else {
    console.log('[Firebase] No cloud credentials detected. Using persistent local fallback database.');
  }
} catch (err) {
  console.warn('[Firebase] Warning initializing Firebase Admin:', err.message);
  console.log('[Firebase] Running with resilient local fallback store.');
}

// ─────────────────────────────────────────────
// Persistent Local JSON Fallback Store
// ─────────────────────────────────────────────
const DATA_FILE = path.join(__dirname, 'local_db.json');

function loadLocalData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('Failed to load local data file:', e);
  }
  return getDefaultData();
}

function getDefaultData() {
  return {
    users: [
      {
        id: 'admin_1',
        email: 'admin@tutorsystem.local',
        role: 'admin',
        name: 'Tutor (Admin)',
        passwordHash: 'admin123'
      },
      {
        id: 'student_1',
        email: 'katelyn@tutorsystem.local',
        role: 'student',
        name: 'Katelyn Xhin',
        passwordHash: 'kate123'
      }
    ],
    studentProgress: {
      katelyn: {
        currentModuleId: 'anph111_week1',
        completedSections: [],
        scores: {},
        lastActive: new Date().toISOString()
      }
    },
    interruptHistory: [],
    quizSubmissions: [],
    mistakeLog: [],
    customQuestions: []
  };
}

let localStore = loadLocalData();

// Ensure collections exist in local store
if (!localStore.quizSubmissions) localStore.quizSubmissions = [];
if (!localStore.mistakeLog) localStore.mistakeLog = [];

function saveLocalData() {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(localStore, null, 2), 'utf8');
  } catch (e) {
    console.error('Failed to save local data file:', e);
  }
}

// ─────────────────────────────────────────────
// Database Service
// ─────────────────────────────────────────────
export const dbService = {
  isLiveFirebase: () => isRealFirebase,

  // ── User Auth ──────────────────────────────
  async getUser(email) {
    if (isRealFirebase && db) {
      try {
        const snap = await db.collection('users').where('email', '==', email).limit(1).get();
        if (!snap.empty) return snap.docs[0].data();
      } catch (err) {
        console.error('[Firebase] Error fetching user:', err.message);
      }
    }
    return localStore.users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
  },

  async verifyPassword(email, password) {
    // With Firebase Auth, password verification is handled by the Firebase Auth SDK on the client.
    // On the server side with Admin SDK, we can't verify passwords directly.
    // So we verify against our local store or Firestore user records.
    const user = await this.getUser(email);
    if (!user) return null;

    // Check password against stored hash (plain text for now, upgrade later)
    if (user.passwordHash && user.passwordHash !== password) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    };
  },

  async createUser(userData) {
    // Add to local store
    const existing = localStore.users.find(u => u.email.toLowerCase() === userData.email.toLowerCase());
    if (existing) {
      // Update existing
      Object.assign(existing, userData);
    } else {
      localStore.users.push(userData);
    }
    saveLocalData();

    // Add to Firestore
    if (isRealFirebase && db) {
      try {
        await db.collection('users').doc(userData.id).set(userData, { merge: true });
      } catch (err) {
        console.error('[Firebase] Error creating user:', err.message);
      }
    }

    return userData;
  },

  async updateUserPassword(email, newPasswordHash) {
    const user = localStore.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (user) {
      user.passwordHash = newPasswordHash;
      saveLocalData();
    }
    if (isRealFirebase && db) {
      try {
        const snap = await db.collection('users').where('email', '==', email).limit(1).get();
        if (!snap.empty) {
          await snap.docs[0].ref.update({ passwordHash: newPasswordHash });
        }
      } catch (err) {
        console.error('[Firebase] Error updating password:', err.message);
      }
    }
  },

  // ── Interrupt History ──────────────────────
  async recordInterruptAnswer(record) {
    localStore.interruptHistory.unshift(record);
    saveLocalData();
    if (isRealFirebase && db) {
      try {
        await db.collection('interrupt_responses').add(record);
      } catch (err) {
        console.error('[Firebase] Interrupt save error:', err.message);
      }
    }
    return record;
  },

  async updateInterruptFeedback(interruptId, feedback) {
    const item = localStore.interruptHistory.find(i => i.id === interruptId);
    if (item) {
      item.feedback = feedback;
      saveLocalData();
    }
    if (isRealFirebase && db) {
      try {
        const snap = await db.collection('interrupt_responses').where('id', '==', interruptId).limit(1).get();
        if (!snap.empty) {
          await snap.docs[0].ref.update({ feedback });
        }
      } catch (err) {
        console.error('[Firebase] Feedback update error:', err.message);
      }
    }
    return item;
  },

  async getInterruptHistory() {
    if (isRealFirebase && db) {
      try {
        const snap = await db.collection('interrupt_responses')
          .orderBy('submittedAt', 'desc')
          .limit(100)
          .get();
        if (!snap.empty) {
          return snap.docs.map(d => d.data());
        }
      } catch (err) {
        console.error('[Firebase] Error fetching interrupt history:', err.message);
      }
    }
    return localStore.interruptHistory;
  },

  // ── Student Progress ───────────────────────
  async saveProgress(studentKey, progressData) {
    localStore.studentProgress[studentKey] = {
      ...(localStore.studentProgress[studentKey] || {}),
      ...progressData,
      lastActive: new Date().toISOString()
    };
    saveLocalData();

    if (isRealFirebase && db) {
      try {
        await db.collection('student_progress').doc(studentKey).set(
          localStore.studentProgress[studentKey],
          { merge: true }
        );
      } catch (err) {
        console.error('[Firebase] Progress save error:', err.message);
      }
    }
    return localStore.studentProgress[studentKey];
  },

  async getProgress(studentKey) {
    if (isRealFirebase && db) {
      try {
        const doc = await db.collection('student_progress').doc(studentKey).get();
        if (doc.exists) return doc.data();
      } catch (err) {
        console.error('[Firebase] Error fetching progress:', err.message);
      }
    }
    return localStore.studentProgress[studentKey] || null;
  },

  // ── Quiz Submissions ───────────────────────
  async saveQuizSubmission(submission) {
    localStore.quizSubmissions.unshift(submission);
    saveLocalData();

    if (isRealFirebase && db) {
      try {
        await db.collection('quiz_submissions').add(submission);
      } catch (err) {
        console.error('[Firebase] Quiz submission save error:', err.message);
      }
    }
    return submission;
  },

  async getQuizSubmissions() {
    if (isRealFirebase && db) {
      try {
        const snap = await db.collection('quiz_submissions')
          .orderBy('submittedAt', 'desc')
          .limit(100)
          .get();
        if (!snap.empty) {
          return snap.docs.map(d => d.data());
        }
      } catch (err) {
        console.error('[Firebase] Error fetching quiz submissions:', err.message);
      }
    }
    return localStore.quizSubmissions || [];
  },

  // ── Mistake Log ────────────────────────────
  async saveMistakeLog(mistakes) {
    localStore.mistakeLog = mistakes;
    saveLocalData();

    if (isRealFirebase && db) {
      try {
        await db.collection('mistake_logs').doc('katelyn').set({
          mistakes,
          updatedAt: new Date().toISOString()
        });
      } catch (err) {
        console.error('[Firebase] Mistake log save error:', err.message);
      }
    }
  },

  async getMistakeLog() {
    if (isRealFirebase && db) {
      try {
        const doc = await db.collection('mistake_logs').doc('katelyn').get();
        if (doc.exists) return doc.data().mistakes || [];
      } catch (err) {
        console.error('[Firebase] Error fetching mistake log:', err.message);
      }
    }
    return localStore.mistakeLog || [];
  },

  // ── Seed Initial Accounts ──────────────────
  async seedAccounts(adminEmail, adminPassword, studentEmail, studentPassword) {
    const accounts = [
      {
        id: 'admin_1',
        email: adminEmail.toLowerCase(),
        role: 'admin',
        name: 'Tutor (Admin)',
        passwordHash: adminPassword
      },
      {
        id: 'student_1',
        email: studentEmail.toLowerCase(),
        role: 'student',
        name: 'Katelyn Xhin',
        passwordHash: studentPassword
      }
    ];

    for (const acc of accounts) {
      await this.createUser(acc);
    }

    console.log('[Firebase] Seeded accounts:', adminEmail, studentEmail);
    return accounts.map(a => ({ id: a.id, email: a.email, role: a.role, name: a.name }));
  }
};
