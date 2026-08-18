import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { WebSocketProvider } from './context/WebSocketContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoginPage } from './components/LoginPage';
import { Header } from './components/Header';
import { BottomNavBar } from './components/BottomNavBar';
import { StudentDashboard } from './components/StudentView/StudentDashboard';
import { AdminDashboard } from './components/AdminView/AdminDashboard';
import { defaultCourseData } from './data/lessons';
import './styles/theme.css';

const MainApp: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<string>('reader');

  // Sync default active tab based on role
  React.useEffect(() => {
    if (user?.role === 'admin') {
      setActiveTab('console');
    } else {
      setActiveTab('reader');
    }
  }, [user?.role]);

  // Show loading spinner while checking saved session
  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--shironeri-silk)'
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          border: '3px solid var(--sakura-border)',
          borderTopColor: 'var(--nadeshiko-rose)',
          borderRadius: '50%',
          animation: 'spin 0.7s linear infinite'
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <WebSocketProvider>
      <div className="app-container">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <main style={{ flex: 1, paddingBottom: '1rem' }}>
          {user?.role === 'admin' ? (
            <AdminDashboard
              course={defaultCourseData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ) : (
            <StudentDashboard
              course={defaultCourseData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
        </main>

        <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </WebSocketProvider>
  );
};

export function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <LanguageProvider>
          <MainApp />
        </LanguageProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
