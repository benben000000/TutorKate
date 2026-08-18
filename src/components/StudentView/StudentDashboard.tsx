import React, { useState } from 'react';
import { LessonCourse } from '../../types';
import { LessonReader } from './LessonReader';
import { FlashcardEngine } from './FlashcardEngine';
import { QuickQuiz } from './QuickQuiz';
import { KateHub } from './KateHub';
import { InterruptOverlay } from './InterruptOverlay';
import { LockedQuizModal } from './LockedQuizModal';
import { BookOpen, Layers } from 'lucide-react';

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
  const [selectedModuleIndex, setSelectedModuleIndex] = useState<number>(0);
  const currentModule = course.modules[selectedModuleIndex] || course.modules[0];

  return (
    <div>
      {/* Real-time Socratic Cognitive Interrupt Modal Overlay */}
      <InterruptOverlay />

      {/* Real-time Mandatory Locked Quiz Modal Overlay */}
      <LockedQuizModal />

      {/* Course Unit Switcher Banner in Reader Mode */}
      {activeTab === 'reader' && course.modules.length > 1 && (
        <div style={{ maxWidth: '1140px', margin: '0 auto 0.5rem auto', padding: '0.75rem 1rem 0 1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
            {course.modules.map((m, mIdx) => {
              const isSelected = mIdx === selectedModuleIndex;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedModuleIndex(mIdx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: 'var(--radius-pill)',
                    background: isSelected ? 'var(--nadeshiko-dark)' : 'var(--shironeri-silk)',
                    color: isSelected ? '#FFFFFF' : 'var(--sumi-ink)',
                    border: `1px solid ${isSelected ? 'var(--nadeshiko-dark)' : 'var(--hai-border)'}`,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {mIdx === 0 ? <BookOpen size={13} /> : <Layers size={13} />}
                  <span>{m.code}: {m.title.length > 38 ? m.title.substring(0, 38) + '...' : m.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Tab Routing */}
      {activeTab === 'reader' && (
        <LessonReader
          key={currentModule.id}
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
