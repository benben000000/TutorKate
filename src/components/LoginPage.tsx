import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const success = await login(email.trim(), password);
      if (!success) {
        setError('Invalid email or password');
      }
    } catch (err: any) {
      setError(err.message || 'Unable to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(168deg, var(--sakura-mist) 0%, var(--shironeri-silk) 40%, var(--gofun-white) 100%)',
      padding: '1.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle background decoration */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        right: '-60px',
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,122,144,0.06) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-40px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(248,195,205,0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Login Card */}
      <div style={{
        width: '100%',
        maxWidth: '380px',
        animation: 'modalEnter 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* Brand */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--sakura-soft)',
            border: '1px solid var(--sakura-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            fontSize: '1.5rem',
            color: 'var(--nadeshiko-rose)',
            fontFamily: 'var(--font-serif)'
          }}>
            桜
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: 'var(--sumi-ink)',
            letterSpacing: '0.03em',
            marginBottom: '0.4rem'
          }}>
            {t('app.title')}
          </h1>
          <p style={{
            fontSize: '0.82rem',
            color: 'var(--hai-slate)',
            letterSpacing: '0.02em'
          }}>
            ANPH111 Laboratory Study System
          </p>
        </div>

        {/* Form Card */}
        <div style={{
          background: 'var(--gofun-white)',
          border: '1px solid var(--sakura-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 1.75rem',
          boxShadow: 'var(--shadow-float)'
        }}>
          <p style={{
            fontSize: '0.88rem',
            color: 'var(--sumi-light)',
            marginBottom: '1.75rem',
            textAlign: 'center'
          }}>
            Sign in to continue
          </p>

          {error && (
            <div style={{
              padding: '0.7rem 0.9rem',
              background: 'rgba(232, 122, 144, 0.08)',
              color: 'var(--nadeshiko-dark)',
              fontSize: '0.82rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1.25rem',
              border: '1px solid rgba(232, 122, 144, 0.15)',
              lineHeight: 1.5
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'var(--sumi-light)',
                marginBottom: '0.35rem',
                letterSpacing: '0.02em'
              }}>
                Email
              </label>
              <input
                type="email"
                className="minimal-input"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="you@example.com"
                autoComplete="email"
                autoFocus
                style={{ fontSize: '1rem' }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'var(--sumi-light)',
                marginBottom: '0.35rem',
                letterSpacing: '0.02em'
              }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="minimal-input"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  style={{ fontSize: '1rem', paddingRight: '2.75rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--hai-light)',
                    cursor: 'pointer',
                    padding: '0.25rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{
                width: '100%',
                marginTop: '0.5rem',
                gap: '0.5rem',
                fontSize: '0.9rem',
                padding: '0.75rem 1.25rem'
              }}
            >
              {loading ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTopColor: '#fff',
                    borderRadius: '50%',
                    animation: 'spin 0.6s linear infinite',
                    display: 'inline-block'
                  }} />
                  Signing in...
                </span>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p style={{
          textAlign: 'center',
          fontSize: '0.72rem',
          color: 'var(--hai-light)',
          marginTop: '1.5rem',
          letterSpacing: '0.02em'
        }}>
          Dedicated study platform for Katelyn Xhin
        </p>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
