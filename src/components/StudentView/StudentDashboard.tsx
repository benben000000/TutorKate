import React from 'react';
import { LessonCourse } from '../../types';
import { LessonReader } from './LessonReader';
import { FlashcardEngine } from './FlashcardEngine';
import { QuickQuiz } from './QuickQuiz';
import { KateHub } from './KateHub';
import { InterruptOverlay } from './InterruptOverlay';
import { LockedQuizModal } from './LockedQuizModal';

interface StudentDashboardProps {
  course: LessonCourse;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  course,
  activeTab,
  setActiveTab
}) => {
  const currentModule = course.modules[0];

  return (
    <div>
      {/* Real-time Socratic Cognitive Interrupt Modal Overlay */}
      <InterruptOverlay />

      {/* Real-time Mandatory Locked Quiz Modal Overlay */}
      <LockedQuizModal />

      {/* Main Tab Routing */}
      {activeTab === 'reader' && (
        <LessonReader
          module={currentModule}
          onNavigateToQuiz={() => setActiveTab('quiz')}
          onNavigateToFlashcards={() => setActiveTab('flashcards')}
        />
      )}

      {activeTab === 'flashcards' && <FlashcardEngine />}

      {activeTab === 'quiz' && (
        <QuickQuiz
          onFinish={() => setActiveTab('reader')}
        />
      )}

      {activeTab === 'hub' && (
        <KateHub onNavigate={(tab) => setActiveTab(tab)} />
      )}
    </div>
  );
};
