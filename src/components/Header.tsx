import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useWebSocket } from '../context/WebSocketContext';
import { BookOpen, Sparkles, Brain, Shield, Globe, LogOut } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { user, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const { isConnected, studentStatus } = useWebSocket();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fil' : 'en');
  };

  return (
    <header className="editorial-header">
      <div className="brand-wrapper">
        <div className="brand-monogram">
          <span>桜</span>
        </div>
        <div className="brand-titles">
          <h1>{t('app.title')}</h1>
          <p>{user?.role === 'student' ? `Welcome, ${user.name}` : 'Instructor Center'}</p>
        </div>
      </div>

      {/* Navigation Tabs for Desktop/Tablet */}
      <nav className="desktop-nav-tabs">
        {user?.role === 'student' ? (
          <>
            <button
              className={activeTab === 'reader' ? 'btn-primary' : 'btn-minimal'}
              onClick={() => setActiveTab('reader')}
            >
              <BookOpen size={15} />
              {t('nav.lessonReader')}
            </button>
            <button
              className={activeTab === 'flashcards' ? 'btn-primary' : 'btn-minimal'}
              onClick={() => setActiveTab('flashcards')}
            >
              <Brain size={15} />
              {t('nav.flashcards')}
            </button>
            <button
              className={activeTab === 'quiz' ? 'btn-primary' : 'btn-minimal'}
              onClick={() => setActiveTab('quiz')}
            >
              <Sparkles size={15} />
              {t('nav.quiz')}
            </button>
          </>
        ) : (
          <>
            <button
              className={activeTab === 'console' ? 'btn-primary' : 'btn-minimal'}
              onClick={() => setActiveTab('console')}
            >
              <Shield size={15} />
              {t('nav.adminConsole')}
            </button>
            <button
              className={activeTab === 'responses' ? 'btn-primary' : 'btn-minimal'}
              onClick={() => setActiveTab('responses')}
            >
              <Sparkles size={15} />
              {t('nav.responseFeed')}
            </button>
            <button
              className={activeTab === 'reader' ? 'btn-primary' : 'btn-minimal'}
              onClick={() => setActiveTab('reader')}
            >
              <BookOpen size={15} />
              {t('nav.lessonReader')}
            </button>
          </>
        )}
      </nav>

      {/* Right Controls: Connection, Language, Logout */}
      <div className="nav-actions">
        {/* Live sync pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            fontSize: '0.72rem',
            padding: '0.3rem 0.6rem',
            borderRadius: 'var(--radius-pill)',
            background: isConnected ? 'rgba(76, 175, 80, 0.08)' : 'rgba(232, 122, 144, 0.1)',
            color: isConnected ? '#2E7D32' : 'var(--nadeshiko-dark)',
            border: `1px solid ${isConnected ? 'rgba(76, 175, 80, 0.2)' : 'var(--sakura-border)'}`,
            whiteSpace: 'nowrap'
          }}
          title={isConnected ? 'Live WebSocket Connected' : 'Connecting to live server...'}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: isConnected ? '#2E7D32' : 'var(--nadeshiko-rose)'
            }}
          />
          <span>{isConnected ? (user?.role === 'admin' && studentStatus?.online ? 'Kate Online' : 'Live') : 'Syncing'}</span>
        </div>

        {/* Language switch */}
        <button
          className="btn-minimal"
          onClick={toggleLanguage}
          title="Toggle English / Filipino"
          style={{ padding: '0.35rem 0.55rem', fontSize: '0.75rem' }}
        >
          <Globe size={13} />
          <span>{language === 'en' ? 'EN' : 'FIL'}</span>
        </button>

        {/* Logout */}
        <button
          className="btn-minimal"
          onClick={logout}
          title={t('auth.logout')}
          style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem', gap: '0.3rem' }}
        >
          <LogOut size={13} />
          <span style={{ fontSize: '0.72rem' }}>Sign Out</span>
        </button>
      </div>
    </header>
  );
};
