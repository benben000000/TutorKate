import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in TutorSystem:', error, errorInfo);
  }

  private handleReset = () => {
    localStorage.removeItem('tutor_auth_user');
    localStorage.removeItem('active_interrupt');
    localStorage.removeItem('active_locked_quiz');
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          background: 'var(--shironeri-silk, #FCFAF8)',
          fontFamily: 'sans-serif'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(232, 122, 144, 0.1)',
            color: '#E87A90',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            marginBottom: '1rem'
          }}>
            🌸
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#2D2926', marginBottom: '0.5rem' }}>
            TutorSystem Encountered a Display Reset
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#6B6866', maxWidth: '400px', marginBottom: '1.5rem' }}>
            A temporary rendering state occurred. Click below to refresh your session smoothly.
          </p>
          <button
            onClick={this.handleReset}
            style={{
              background: '#E87A90',
              color: '#FFFFFF',
              border: 'none',
              padding: '0.65rem 1.25rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.86rem',
              cursor: 'pointer'
            }}
          >
            Reset Session & Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
