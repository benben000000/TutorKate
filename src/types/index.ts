export type Role = 'admin' | 'student';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
}

export type LearningTechnique = 
  | 'socratic'
  | 'feynman'
  | 'recall'
  | 'clinical'
  | 'eli5'
  | 'spot_mistake'
  | 'custom';

export type QuestionFormat = 'multiple_choice' | 'enumeration' | 'essay' | 'diagram_label' | 'socratic';
export type QuestionDifficulty = 'easy' | 'medium' | 'hard' | 'practical';
export type QuizTier = 10 | 15 | 20 | 25 | 30 | 50;

export interface DiagramLabelItem {
  id: string;
  labelNumber: number | string; // Pointer number (e.g. 1, 2, 3 or A, B, C)
  targetName: string; // The anatomical structure being pointed to
  correctAnswer: string;
  options?: string[]; // Multiple choice options for this pointer
  acceptableAnswers?: string[]; // Variations/synonyms
  hint?: string;
}

export interface ComprehensiveQuizQuestion {
  id: string;
  moduleId: string;
  partNumber?: 1 | 2 | 3 | 'final';
  type: QuestionFormat;
  difficulty: QuestionDifficulty;
  category: string;
  question: string;
  options?: string[]; // For multiple choice
  correctIndex?: number; // For multiple choice
  correctItems?: string[]; // For enumeration
  enumerationCount?: number; // Expected items
  keywords?: string[]; // Key conceptual terms
  diagramUrl?: string; // Image URL for diagram labeling
  diagramTitle?: string; // Title/caption of diagram
  diagramLabels?: DiagramLabelItem[]; // Items to label in diagram
  modelAnswer: string; // Official Answer Key for Tutor
  rubricGuide: string; // Grading criteria for Tutor
  socraticClue: string; // Pedagogical explanation of why incorrect without giving answer
}

export interface MistakeRecord {
  id: string;
  questionId: string;
  question: string;
  category: string;
  studentAnswer: string | number | string[];
  socraticClue: string;
  timestamp: number;
  remediationCompleted?: boolean;
}

export interface QuizSubmission {
  id: string;
  studentName: string;
  tier: QuizTier | number;
  score: number;
  totalQuestions: number;
  answers: Record<string, any>;
  submittedAt: string;
  questions: ComprehensiveQuizQuestion[];
  tutorFeedback?: {
    gradedScore?: number;
    notes?: string;
    gradedAt?: string;
  } | null;
}

export interface LockedQuizPayload {
  id: string;
  tier: QuizTier | number;
  title: string;
  questions: ComprehensiveQuizQuestion[];
  triggeredBy: 'admin' | 'auto_socratic';
  timestamp: number;
  required: boolean;
}

export interface InterruptPayload {
  id: string;
  timestamp: number;
  technique: LearningTechnique;
  title: string;
  prompt: string;
  context: string;
  guide?: string;
  triggerSource: 'admin' | 'auto_checkpoint' | 'auto_mistake' | 'custom';
  required: boolean;
  status?: 'pending' | 'resolved';
}

export interface InterruptResponse {
  id: string;
  interruptId: string;
  studentName: string;
  answer: string;
  technique: LearningTechnique;
  prompt: string;
  context: string;
  guide?: string;
  timeTakenSeconds: number;
  submittedAt: string;
  feedback?: {
    rating: 'mastered' | 'good_effort' | 'review_needed';
    notes: string;
    givenAt?: string;
  } | null;
}

export interface StudentStatus {
  online: boolean;
  name: string;
  currentModuleId: string;
  currentSectionTitle: string;
  scrollProgress: number;
  lastSeen: number;
  currentReadingTimeSec: number;
  activeQuizTier?: number;
  mistakesCount?: number;
}

export interface QuestionBankItem {
  id: string;
  moduleId: string;
  technique: LearningTechnique;
  title: string;
  prompt: string;
  context: string;
  guide: string;
  difficulty: 'foundational' | 'intermediate' | 'advanced';
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: string;
  moduleId: string;
  keyRule?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  moduleId: string;
  category?: string;
  socraticClue?: string;
}

export interface LessonSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string; // Markdown / formatted text
  keyTakeaways: string[];
  clinicalCorrelations?: string[];
  flashcards?: Flashcard[];
  checkpointQuestion?: QuestionBankItem;
}

export interface LessonModule {
  id: string;
  weekNumber: number;
  code: string; // e.g. "ANPH111-LAB-W1"
  title: string;
  subtitle: string;
  description: string;
  estimatedMinutes: number;
  sections: LessonSection[];
  quiz: QuizQuestion[];
}

export interface LessonCourse {
  id: string;
  subjectCode: string;
  title: string;
  instructor: string;
  modules: LessonModule[];
}
