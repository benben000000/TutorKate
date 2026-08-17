import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useWebSocket } from '../context/WebSocketContext';
import { BookOpen, Brain, Sparkles, Heart, Shield, MessageSquare, Activity } from 'lucide-react';

interface BottomNavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, setActiveTab }) => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const { responses, activeInterrupt } = useWebSocket();

  const isStudent = user?.role !== 'admin';

  return (
    <nav className="bottom-nav-bar" aria-label="Mobile Navigation">
      <div className="bottom-nav-container">
        {isStudent ? (
          <>
            {/* Student Tabs */}
            <button
              className={`bottom-nav-item ${activeTab === 'reader' ? 'active' : ''}`}
              onClick={() => setActiveTab('reader')}
              aria-label="Lesson Reader"
            >
              <div className="bottom-nav-icon-wrapper">
                <BookOpen size={19} />
              </div>
              <span className="bottom-nav-label">{t('nav.lessonReader') || 'Reader'}</span>
            </button>

            <button
              className={`bottom-nav-item ${activeTab === 'flashcards' ? 'active' : ''}`}
              onClick={() => setActiveTab('flashcards')}
              aria-label="Memory Flashcards"
            >
              <div className="bottom-nav-icon-wrapper">
                <Brain size={19} />
              </div>
              <span className="bottom-nav-label">{t('nav.flashcards') || 'Cards'}</span>
            </button>

            <button
              className={`bottom-nav-item ${activeTab === 'quiz' ? 'active' : ''}`}
              onClick={() => setActiveTab('quiz')}
              aria-label="Mastery Quiz"
            >
              <div className="bottom-nav-icon-wrapper">
                <Sparkles size={19} />
              </div>
              <span className="bottom-nav-label">{t('nav.quiz') || 'Quiz'}</span>
            </button>

            <button
              className={`bottom-nav-item ${activeTab === 'hub' ? 'active' : ''}`}
              onClick={() => setActiveTab('hub')}
              aria-label="Kate's Study Hub"
            >
              <div className="bottom-nav-icon-wrapper">
                <Heart size={19} />
              </div>
              <span className="bottom-nav-label">Kate's Hub</span>
            </button>
          </>
        ) : (
          <>
            {/* Tutor / Admin Tabs */}
            <button
              className={`bottom-nav-item ${activeTab === 'console' ? 'active' : ''}`}
              onClick={() => setActiveTab('console')}
              aria-label="Tutor Console"
            >
              <div className="bottom-nav-icon-wrapper">
                <Shield size={19} />
                {activeInterrupt && <span className="bottom-nav-badge" />}
              </div>
              <span className="bottom-nav-label">Console</span>
            </button>

            <button
              className={`bottom-nav-item ${activeTab === 'responses' ? 'active' : ''}`}
              onClick={() => setActiveTab('responses')}
              aria-label="Student Responses"
            >
              <div className="bottom-nav-icon-wrapper">
                <MessageSquare size={19} />
                {responses.length > 0 && <span className="bottom-nav-badge" />}
              </div>
              <span className="bottom-nav-label">Responses</span>
            </button>

            <button
              className={`bottom-nav-item ${activeTab === 'reader' ? 'active' : ''}`}
              onClick={() => setActiveTab('reader')}
              aria-label="Lesson Reader"
            >
              <div className="bottom-nav-icon-wrapper">
                <BookOpen size={19} />
              </div>
              <span className="bottom-nav-label">Reader</span>
            </button>

            <button
              className={`bottom-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
              aria-label="Student Monitor"
            >
              <div className="bottom-nav-icon-wrapper">
                <Activity size={19} />
              </div>
              <span className="bottom-nav-label">Monitor</span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
