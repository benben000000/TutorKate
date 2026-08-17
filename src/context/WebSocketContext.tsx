import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useAuth } from './AuthContext';
import {
  InterruptPayload,
  InterruptResponse,
  StudentStatus,
  LockedQuizPayload,
  QuizSubmission,
  MistakeRecord,
  ComprehensiveQuizQuestion
} from '../types';

interface WebSocketContextType {
  isConnected: boolean;
  activeInterrupt: InterruptPayload | null;
  activeLockedQuiz: LockedQuizPayload | null;
  studentStatus: StudentStatus | null;
  responses: InterruptResponse[];
  quizSubmissions: QuizSubmission[];
  mistakeLog: MistakeRecord[];
  triggerInterrupt: (payload: Partial<InterruptPayload>) => void;
  submitAnswer: (interruptId: string, answer: string, timeTakenSeconds: number) => void;
  triggerLockedQuiz: (payload: Partial<LockedQuizPayload>) => void;
  submitLockedQuiz: (
    quizId: string,
    answers: Record<string, any>,
    score: number,
    totalQuestions: number,
    questions: ComprehensiveQuizQuestion[]
  ) => void;
  logMistake: (
    questionId: string,
    question: string,
    studentAnswer: any,
    socraticClue: string,
    category: string
  ) => void;
  triggerAutoSocraticInterrupt: (mistake: MistakeRecord) => void;
  sendFeedback: (interruptId: string, rating: 'mastered' | 'good_effort' | 'review_needed', notes: string) => void;
  syncProgress: (data: {
    moduleId?: string;
    sectionTitle?: string;
    scrollProgress?: number;
    readingTimeSec?: number;
    activeQuizTier?: number;
    mistakesCount?: number;
  }) => void;
  dismissInterrupt: () => void;
  dismissLockedQuiz: () => void;
  clearMistakes: () => void;
}

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [isConnected, setIsConnected] = useState(false);
  const [activeInterrupt, setActiveInterrupt] = useState<InterruptPayload | null>(() => {
    try {
      const saved = localStorage.getItem('active_interrupt');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  const [activeLockedQuiz, setActiveLockedQuiz] = useState<LockedQuizPayload | null>(() => {
    try {
      const saved = localStorage.getItem('active_locked_quiz');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  const [studentStatus, setStudentStatus] = useState<StudentStatus | null>(null);
  const [responses, setResponses] = useState<InterruptResponse[]>([]);
  const [quizSubmissions, setQuizSubmissions] = useState<QuizSubmission[]>([]);
  const [mistakeLog, setMistakeLog] = useState<MistakeRecord[]>(() => {
    try {
      const saved = localStorage.getItem('kate_mistake_log');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<any>(null);

  // Sync state across browser tabs via localStorage events
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'active_interrupt') {
        setActiveInterrupt(e.newValue ? JSON.parse(e.newValue) : null);
      }
      if (e.key === 'active_locked_quiz') {
        setActiveLockedQuiz(e.newValue ? JSON.parse(e.newValue) : null);
      }
      if (e.key === 'kate_mistake_log') {
        setMistakeLog(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Persist mistakes locally and sync to server
  const mistakeSyncRef = useRef(false);
  useEffect(() => {
    localStorage.setItem('kate_mistake_log', JSON.stringify(mistakeLog));
    // Sync to server (skip initial load to avoid overwriting server data)
    if (mistakeSyncRef.current && wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'SYNC_MISTAKE_LOG',
        payload: { mistakes: mistakeLog }
      }));
    }
    mistakeSyncRef.current = true;
  }, [mistakeLog]);

  // Persist active interrupt
  useEffect(() => {
    if (activeInterrupt) {
      localStorage.setItem('active_interrupt', JSON.stringify(activeInterrupt));
    } else {
      localStorage.removeItem('active_interrupt');
    }
  }, [activeInterrupt]);

  // Persist active locked quiz
  useEffect(() => {
    if (activeLockedQuiz) {
      localStorage.setItem('active_locked_quiz', JSON.stringify(activeLockedQuiz));
    } else {
      localStorage.removeItem('active_locked_quiz');
    }
  }, [activeLockedQuiz]);

  // Load initial response history
  useEffect(() => {
    fetch('/api/admin/responses')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setResponses(data);
      })
      .catch(() => {});

    fetch('/api/admin/quiz-submissions')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setQuizSubmissions(data);
      })
      .catch(() => {});
  }, []);

  const connect = () => {
    if (wsRef.current && (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING)) {
      return;
    }

    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = window.location.port === '5173'
      ? `${protocol}//${window.location.hostname}:3001`
      : `${protocol}//${window.location.host}/ws`;

    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setIsConnected(true);
      if (user) {
        ws.send(
          JSON.stringify({
            type: 'REGISTER_ROLE',
            payload: { role: user.role, name: user.name }
          })
        );
      }
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        switch (msg.type) {
          case 'STATE_INIT':
            if (msg.payload.activeInterrupt) setActiveInterrupt(msg.payload.activeInterrupt);
            if (msg.payload.activeLockedQuiz) setActiveLockedQuiz(msg.payload.activeLockedQuiz);
            if (msg.payload.studentStatus) setStudentStatus(msg.payload.studentStatus);
            // Request persisted mistake log from server
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
              wsRef.current.send(JSON.stringify({ type: 'GET_MISTAKE_LOG', payload: {} }));
            }
            break;

          case 'MISTAKE_LOG_LOADED':
            if (msg.payload.mistakes && Array.isArray(msg.payload.mistakes) && msg.payload.mistakes.length > 0) {
              mistakeSyncRef.current = false; // Prevent echo sync
              setMistakeLog(msg.payload.mistakes);
            }
            break;

          case 'INTERRUPT_TRIGGERED':
            setActiveInterrupt(msg.payload);
            break;

          case 'LOCKED_QUIZ_TRIGGERED':
            setActiveLockedQuiz(msg.payload);
            break;

          case 'INTERRUPT_RESOLVED':
            setActiveInterrupt(null);
            if (msg.payload.responseRecord) {
              setResponses((prev) => [msg.payload.responseRecord, ...prev.filter(r => r.id !== msg.payload.responseRecord.id)]);
            }
            break;

          case 'LOCKED_QUIZ_RESOLVED':
            setActiveLockedQuiz(null);
            if (msg.payload.submissionRecord) {
              setQuizSubmissions((prev) => [msg.payload.submissionRecord, ...prev]);
            }
            break;

          case 'FEEDBACK_RECEIVED':
            setResponses((prev) =>
              prev.map((item) =>
                item.id === msg.payload.interruptId
                  ? { ...item, feedback: msg.payload.feedback }
                  : item
              )
            );
            break;

          case 'STUDENT_PRESENCE_UPDATE':
            setStudentStatus(msg.payload);
            break;

          case 'INTERRUPT_DISMISSED':
            setActiveInterrupt(null);
            break;

          case 'LOCKED_QUIZ_DISMISSED':
            setActiveLockedQuiz(null);
            break;

          default:
            break;
        }
      } catch (err) {
        console.error('[WS] Parse error:', err);
      }
    };

    ws.onclose = () => {
      setIsConnected(false);
      reconnectTimeoutRef.current = setTimeout(connect, 3000);
    };

    ws.onerror = () => {
      ws.close();
    };
  };

  useEffect(() => {
    connect();
    return () => {
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
      if (wsRef.current) wsRef.current.close();
    };
  }, []);

  // Re-register when role changes
  useEffect(() => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN && user) {
      wsRef.current.send(
        JSON.stringify({
          type: 'REGISTER_ROLE',
          payload: { role: user.role, name: user.name }
        })
      );
    }
  }, [user]);

  const send = (type: string, payload: any) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type, payload }));
    }
  };

  const triggerInterrupt = (payload: Partial<InterruptPayload>) => {
    const fullPayload: InterruptPayload = {
      id: 'int_' + Date.now(),
      timestamp: Date.now(),
      technique: payload.technique || 'socratic',
      title: payload.title || 'Live Cognitive Challenge',
      prompt: payload.prompt || '',
      context: payload.context || '',
      guide: payload.guide || '',
      triggerSource: payload.triggerSource || 'admin',
      required: true,
      status: 'pending'
    };
    setActiveInterrupt(fullPayload);
    send('TRIGGER_INTERRUPT', fullPayload);
  };

  const submitAnswer = (interruptId: string, answer: string, timeTakenSeconds: number) => {
    send('SUBMIT_STUDENT_ANSWER', { interruptId, answer, timeTakenSeconds });
    setActiveInterrupt(null);
  };

  const triggerLockedQuiz = (payload: Partial<LockedQuizPayload>) => {
    const fullPayload: LockedQuizPayload = {
      id: 'quiz_' + Date.now(),
      tier: payload.tier || 10,
      title: payload.title || `ANPH111 Laboratory Quiz (${payload.tier || 10} Items)`,
      questions: payload.questions || [],
      triggeredBy: payload.triggeredBy || 'admin',
      timestamp: Date.now(),
      required: true
    };
    setActiveLockedQuiz(fullPayload);
    send('TRIGGER_LOCKED_QUIZ', fullPayload);
  };

  const submitLockedQuiz = (
    quizId: string,
    answers: Record<string, any>,
    score: number,
    totalQuestions: number,
    questions: ComprehensiveQuizQuestion[]
  ) => {
    const submissionRecord: QuizSubmission = {
      id: quizId || ('sub_' + Date.now()),
      studentName: user?.name || 'Katelyn Xhin',
      tier: totalQuestions,
      score,
      totalQuestions,
      answers,
      questions,
      submittedAt: new Date().toISOString(),
      tutorFeedback: null
    };

    setQuizSubmissions((prev) => [submissionRecord, ...prev]);
    setActiveLockedQuiz(null);
    send('SUBMIT_LOCKED_QUIZ', { quizId, answers, score, totalQuestions, questions });
  };

  const logMistake = (
    questionId: string,
    question: string,
    studentAnswer: any,
    socraticClue: string,
    category: string
  ) => {
    const record: MistakeRecord = {
      id: 'mis_' + Date.now() + '_' + Math.random().toString(36).substring(5),
      questionId,
      question,
      category,
      studentAnswer,
      socraticClue,
      timestamp: Date.now()
    };
    setMistakeLog((prev) => [record, ...prev]);
  };

  const triggerAutoSocraticInterrupt = (mistake: MistakeRecord) => {
    triggerInterrupt({
      technique: 'socratic',
      title: `Pattern Interrupt: ${mistake.category}`,
      prompt: `You just encountered a challenge with this concept: "${mistake.question}".\n\nCognitive Clue: ${mistake.socraticClue}\n\nReflect on this: In your own words, why is your initial approach incorrect, and what is the proper laboratory safety protocol?`,
      context: mistake.category,
      guide: 'Student correcting self-identified conceptual error',
      triggerSource: 'auto_mistake',
      required: true
    });
  };

  const sendFeedback = (interruptId: string, rating: 'mastered' | 'good_effort' | 'review_needed', notes: string) => {
    send('TUTOR_FEEDBACK', { interruptId, rating, notes });
  };

  const syncProgress = (data: {
    moduleId?: string;
    sectionTitle?: string;
    scrollProgress?: number;
    readingTimeSec?: number;
    activeQuizTier?: number;
    mistakesCount?: number;
  }) => {
    send('STUDENT_PROGRESS_SYNC', data);
  };

  const dismissInterrupt = () => {
    send('DISMISS_INTERRUPT', {});
    setActiveInterrupt(null);
  };

  const dismissLockedQuiz = () => {
    send('DISMISS_LOCKED_QUIZ', {});
    setActiveLockedQuiz(null);
  };

  const clearMistakes = () => {
    setMistakeLog([]);
  };

  return (
    <WebSocketContext.Provider
      value={{
        isConnected,
        activeInterrupt,
        activeLockedQuiz,
        studentStatus,
        responses,
        quizSubmissions,
        mistakeLog,
        triggerInterrupt,
        submitAnswer,
        triggerLockedQuiz,
        submitLockedQuiz,
        logMistake,
        triggerAutoSocraticInterrupt,
        sendFeedback,
        syncProgress,
        dismissInterrupt,
        dismissLockedQuiz,
        clearMistakes
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};
