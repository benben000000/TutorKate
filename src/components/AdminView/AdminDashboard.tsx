import React, { useState } from 'react';
import { LessonCourse } from '../../types';
import { LiveStudentMonitor } from './LiveStudentMonitor';
import { InterruptConsole } from './InterruptConsole';
import { LiveResponseFeed } from './LiveResponseFeed';
import { LessonReader } from '../StudentView/LessonReader';
import { BookOpen, Layers, ArrowRight } from 'lucide-react';

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
          {/* ═══════════════════════════════════════════════════════════════
              BIG PROMINENT MODULE SWITCHER FOR ADMIN LESSON READER
              ═══════════════════════════════════════════════════════════════ */}
          {course.modules.length > 1 && (
            <div
              style={{
                background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)',
                border: '2px solid var(--sakura-border)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1rem',
                marginBottom: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--nadeshiko-dark)'
                  }}
                >
                  📖 Switch Active Lesson Module
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--hai-slate)' }}>
                  {course.modules.length} Modules Available
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                {course.modules.map((m, mIdx) => {
                  const isSelected = mIdx === selectedModuleIndex;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelectedModuleIndex(mIdx)}
                      style={{
                        flex: '1 1 250px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: isSelected
                          ? 'var(--nadeshiko-dark)'
                          : 'var(--gofun-white)',
                        color: isSelected ? '#FFFFFF' : 'var(--sumi-ink)',
                        border: isSelected
                          ? '2px solid var(--nadeshiko-dark)'
                          : '1px solid var(--hai-border)',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        textAlign: 'left'
                      }}
                    >
                      <span style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: isSelected ? 'rgba(255,255,255,0.2)' : 'var(--sakura-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {mIdx === 0 ? <BookOpen size={16} /> : <Layers size={16} />}
                      </span>
                      <div style={{ overflow: 'hidden' }}>
                        <div style={{ fontSize: '0.72rem', opacity: 0.8, marginBottom: '1px' }}>
                          {m.code}
                        </div>
                        <div style={{ fontSize: '0.84rem', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {m.title}
                        </div>
                      </div>
                      {isSelected && (
                        <ArrowRight size={14} style={{ marginLeft: 'auto', flexShrink: 0 }} />
                      )}
                    </button>
                  );
                })}
              </div>
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
