import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { useWebSocket } from '../../context/WebSocketContext';
import { Sparkles, Brain, ShieldCheck, Award, Globe, AlertCircle, Clock, Zap, BookOpen } from 'lucide-react';

interface KateHubProps {
  onNavigate: (tab: string) => void;
}

export const KateHub: React.FC<KateHubProps> = ({ onNavigate }) => {
  const { user } = useAuth();
  const { language, setLanguage } = useLanguage();
  const { isConnected, mistakeLog, triggerAutoSocraticInterrupt } = useWebSocket();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fil' : 'en');
  };

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '1.25rem 1rem' }}>
      {/* Profile & Welcome Card */}
      <div
        className="editorial-card"
        style={{
          background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)',
          border: '1px solid var(--sakura-border-hover)',
          padding: '1.5rem',
          marginBottom: '1.25rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--sakura-soft)',
              border: '1px solid var(--sakura-border-hover)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--nadeshiko-dark)',
              fontSize: '1.35rem',
              fontWeight: 700,
              fontFamily: 'var(--font-serif)',
              flexShrink: 0
            }}
          >
            🌸
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="category-tag">Student Profile</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--hai-light)' }}>•</span>
              <span style={{ fontSize: '0.72rem', color: isConnected ? '#2E7D32' : 'var(--nadeshiko-dark)', fontWeight: 600 }}>
                {isConnected ? '● Tutor Live' : '○ Standby'}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
              {user?.name || 'Katelyn Xhin'}
            </h2>
            <p style={{ fontSize: '0.78rem', color: 'var(--hai-slate)' }}>
              BSN • ANPH111 Laboratory Mastery
            </p>
          </div>
        </div>

        {/* Live sync banner */}
        <div
          style={{
            marginTop: '1rem',
            padding: '0.65rem 0.85rem',
            borderRadius: 'var(--radius-sm)',
            background: isConnected ? 'rgba(76, 175, 80, 0.08)' : 'rgba(232, 122, 144, 0.08)',
            border: `1px solid ${isConnected ? 'rgba(76, 175, 80, 0.2)' : 'var(--sakura-border)'}`,
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.78rem',
            color: isConnected ? '#2E7D32' : 'var(--nadeshiko-dark)'
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: isConnected ? '#2E7D32' : 'var(--nadeshiko-rose)', flexShrink: 0 }} />
          <span>
            {isConnected
              ? 'Instructor is connected. Quizzes & Socratic challenges can pop up in real-time.'
              : 'Standby mode. All quiz progress and mistake patterns are saved locally.'}
          </span>
        </div>
      </div>

      {/* Weak Spots & Mistake Queue Card */}
      {mistakeLog.length > 0 && (
        <div className="editorial-card" style={{ marginBottom: '1.25rem', background: 'var(--sakura-mist)', borderColor: 'var(--sakura-border-hover)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--nadeshiko-dark)' }}>
              <AlertCircle size={16} />
              <span>Active Remediation Queue ({mistakeLog.length})</span>
            </div>
            <span style={{ fontSize: '0.72rem', color: 'var(--hai-slate)' }}>Tap to Practice</span>
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--sumi-light)', marginBottom: '0.75rem' }}>
            The system tracks concepts you found challenging and will automatically pop up Socratic interrupts to reinforce your learning.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {mistakeLog.slice(0, 3).map((m) => (
              <div key={m.id} style={{ background: '#FFFFFF', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--sakura-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--nadeshiko-dark)' }}>{m.category}</span>
                  <button
                    className="btn-subtle"
                    onClick={() => triggerAutoSocraticInterrupt(m)}
                    style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}
                  >
                    <Zap size={11} style={{ marginRight: '3px' }} />
                    Socratic Drill
                  </button>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--sumi-ink)' }}>{m.question}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Study Navigation */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <button
          className="editorial-card"
          onClick={() => onNavigate('flashcards')}
          style={{
            padding: '1.1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.4rem',
            cursor: 'pointer',
            textAlign: 'left',
            background: 'var(--gofun-white)',
            border: '1px solid var(--sakura-border)'
          }}
        >
          <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', background: 'var(--sakura-soft)', color: 'var(--nadeshiko-rose)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Brain size={18} />
          </div>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--sumi-ink)', marginTop: '0.2rem' }}>
            Memory Deck
          </div>
          <div style={{ fontSize: '0.74rem', color: 'var(--hai-slate)' }}>
            50+ High-Yield Safety Cards
          </div>
        </button>

        <button
          className="editorial-card"
          onClick={() => onNavigate('quiz')}
          style={{
            padding: '1.1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.4rem',
            cursor: 'pointer',
            textAlign: 'left',
            background: 'var(--gofun-white)',
            border: '1px solid var(--sakura-border)'
          }}
        >
          <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', background: 'var(--sakura-soft)', color: 'var(--nadeshiko-rose)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={18} />
          </div>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--sumi-ink)', marginTop: '0.2rem' }}>
            Adaptive Quizzes
          </div>
          <div style={{ fontSize: '0.74rem', color: 'var(--hai-slate)' }}>
            10 to 50 Items Practice
          </div>
        </button>
      </div>

      {/* High-Yield Laboratory Science Cheatsheets */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', padding: '0 0.25rem' }}>
          <span className="category-tag">High-Yield Laboratory Cheatsheets</span>
          <span style={{ fontSize: '0.72rem', color: 'var(--hai-slate)' }}>Week 1 Core</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {/* Card 1: 4 Hazard Classes & 60% Metric */}
          <div className="editorial-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <ShieldCheck size={16} color="var(--nadeshiko-rose)" />
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--sumi-ink)' }}>
                4 Laboratory Hazard Classes (60%+ Rule)
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--sumi-light)' }}>
              <div>• <strong>Chemical</strong>: Fixatives & Stains</div>
              <div>• <strong>Biological</strong>: Tissues & Smears</div>
              <div>• <strong>Sharps</strong>: Scalpels & Slides</div>
              <div>• <strong>Heat/Electrical</strong>: Burners & Wiring</div>
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'var(--nadeshiko-dark)', background: 'var(--sakura-soft)', padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-sm)' }}>
              ⚠️ Over 60% of lab injuries correlate with absent or improper PPE.
            </div>
          </div>

          {/* Card 2: Nitrile vs Latex & 4-Step Routine */}
          <div className="editorial-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Award size={16} color="var(--nadeshiko-rose)" />
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--sumi-ink)' }}>
                PPE Barrier Science & 4-Step Routine
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--sumi-light)', lineHeight: 1.5, marginBottom: '0.4rem' }}>
              <strong>Nitrile</strong> is chemical & puncture resistant (no Type I/IV latex allergy).
            </p>
            <div style={{ fontSize: '0.78rem', color: 'var(--sumi-ink)', fontWeight: 600 }}>
              1. Inspect ➔ 2. Don & Doff ➔ 3. Clean & Store ➔ 4. Dispose (Yellow Bin)
            </div>
          </div>

          {/* Card 3: Emergency Eyewash & Safety Shower */}
          <div className="editorial-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Clock size={16} color="var(--nadeshiko-rose)" />
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--sumi-ink)' }}>
                Emergency Eyewash & Spill Protocols
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--sumi-light)', lineHeight: 1.5 }}>
              • <strong>Eye Splash</strong>: Flush continuously at eyewash for <strong>at least 15 minutes</strong> holding eyelids open.<br />
              • <strong>Body Chemical Spill</strong>: Emergency Safety Shower immediately + strip off contaminated clothes.<br />
              • <strong>Thermal Burn</strong>: Run cool clean tap water over skin (never apply ice/butter).
            </p>
          </div>

          {/* Card 4: Return-Ready Standard & Make-Up Rules */}
          <div className="editorial-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <BookOpen size={16} color="var(--nadeshiko-rose)" />
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--sumi-ink)' }}>
                Return-Ready & Make-Up Protocols
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--sumi-light)', lineHeight: 1.5 }}>
              • <strong>Return-Ready</strong>: Wash with lab detergent, rinse with distilled water, dry completely, and wipe benches with 70% alcohol.<br />
              • <strong>Make-Up Lab</strong>: 1-week advance letter + dual signatures from <strong>Professor AND College Dean</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Preferences & Quick User Switch */}
      <div className="editorial-card" style={{ padding: '1.25rem' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--sumi-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
          Preferences & Controls
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <button
            className="btn-minimal"
            onClick={toggleLanguage}
            style={{ width: '100%', justifyContent: 'space-between', padding: '0.65rem 0.85rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Globe size={15} />
              <span>Language</span>
            </div>
            <strong style={{ color: 'var(--nadeshiko-dark)' }}>{language === 'en' ? 'English (EN)' : 'Filipino (FIL)'}</strong>
          </button>
        </div>
      </div>
    </div>
  );
};
