import React from 'react';
import { LessonCourse } from '../../types';
import { LiveStudentMonitor } from './LiveStudentMonitor';
import { InterruptConsole } from './InterruptConsole';
import { LiveResponseFeed } from './LiveResponseFeed';
import { LessonReader } from '../StudentView/LessonReader';

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
  const currentModule = course.modules[0];

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
        <LessonReader
          module={currentModule}
          onNavigateToQuiz={() => setActiveTab('responses')}
          onNavigateToFlashcards={() => setActiveTab('console')}
        />
      )}
    </div>
  );
};
