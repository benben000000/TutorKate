import React, { useState } from 'react';
import { LessonCourse } from '../../types';
import { LiveStudentMonitor } from './LiveStudentMonitor';
import { InterruptConsole } from './InterruptConsole';
import { LiveResponseFeed } from './LiveResponseFeed';
import { LessonReader } from '../StudentView/LessonReader';
import { BookOpen, Layers } from 'lucide-react';

interface AdminDashboardProps {
  course: LessonCourse;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  course,
  activeTab,
  setActiveTab
}) => {
  const [selectedModuleIndex, setSelectedModuleIndex] = useState<number>(0);
  const currentModule = course.modules[selectedModuleIndex] || course.modules[0];

  return (
    <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '1rem' }}>
      {/* Live Student Telemetry Ribbon */}
      <LiveStudentMonitor />

      {/* Main Admin Tab View */}
      {activeTab === 'console' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <InterruptConsole />
        </div>
      )}

      {activeTab === 'responses' && (
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <LiveResponseFeed />
        </div>
      )}

      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <LiveResponseFeed />
        </div>
      )}

      {activeTab === 'reader' && (
        <div>
          {course.modules.length > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', overflowX: 'auto' }}>
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
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {mIdx === 0 ? <BookOpen size={13} /> : <Layers size={13} />}
                    <span>{m.code}: {m.title.length > 38 ? m.title.substring(0, 38) + '...' : m.title}</span>
                  </button>
                );
              })}
            </div>
          )}

          <LessonReader
            key={currentModule.id}
            module={currentModule}
            onNavigateToQuiz={() => setActiveTab('responses')}
            onNavigateToFlashcards={() => setActiveTab('console')}
          />
        </div>
      )}
    </div>
  );
};
