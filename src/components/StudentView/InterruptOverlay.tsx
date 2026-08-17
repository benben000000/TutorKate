import React, { useState, useEffect } from 'react';
import { useWebSocket } from '../../context/WebSocketContext';
import { useLanguage } from '../../context/LanguageContext';
import { Send, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InterruptOverlay: React.FC = () => {
  const { activeInterrupt, submitAnswer } = useWebSocket();
  const { t } = useLanguage();
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (activeInterrupt) {
      setStartTime(Date.now());
      setElapsedSeconds(0);
      setAnswer('');
    }
  }, [activeInterrupt?.id]);

  useEffect(() => {
    if (!activeInterrupt) return;
    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [activeInterrupt, startTime]);

  if (!activeInterrupt) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;

    setIsSubmitting(true);
    submitAnswer(activeInterrupt.id, answer.trim(), elapsedSeconds);

    // Trigger gentle subtle confetti
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F8C3CD', '#E87A90', '#F19483', '#FCFAF8']
      });
    } catch (e) {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setAnswer('');
    }, 400);
  };

  const getTechniqueTitle = (tech: string) => {
    switch (tech) {
      case 'socratic': return t('interrupt.socratic') || 'Socratic Inquiry';
      case 'feynman': return t('interrupt.feynman') || 'Feynman Technique';
      case 'recall': return t('interrupt.recall') || 'Active Recall';
      case 'clinical': return t('interrupt.clinical') || 'Clinical Scenario';
      case 'eli5': return t('interrupt.eli5') || 'ELI5 Analogy';
      case 'spot_mistake': return t('interrupt.spot_mistake') || 'Spot Mistake';
      default: return t('interrupt.custom') || 'Tutor Prompt';
    }
  };

  return (
    <div className="interrupt-backdrop">
      <div className="interrupt-modal">
        {/* Header Badge & Technique */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
              <span className="category-tag">
                {getTechniqueTitle(activeInterrupt.technique)}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--hai-light)' }}>•</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--hai-slate)' }}>
                {activeInterrupt.context || 'Laboratory Principle'}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--sumi-ink)' }}>
              {activeInterrupt.title || 'Tutor Challenge'}
            </h2>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.75rem',
              color: 'var(--hai-slate)',
              background: 'var(--sakura-soft)',
              padding: '0.25rem 0.55rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--sakura-border)',
              flexShrink: 0
            }}
          >
            <Clock size={12} />
            <span>{elapsedSeconds}s</span>
          </div>
        </div>

        {/* Prompt content */}
        <div
          style={{
            background: 'var(--sakura-mist)',
            border: '1px solid var(--sakura-border)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.15rem',
            marginBottom: '1.25rem',
            fontSize: '0.92rem',
            lineHeight: 1.65,
            color: 'var(--sumi-ink)',
            fontWeight: 450
          }}
        >
          {activeInterrupt.prompt}
        </div>

        {/* Form for Student Response */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--sumi-light)', marginBottom: '0.35rem' }}>
              {t('interrupt.yourAnswer') || 'Your Response'}
            </label>
            <textarea
              className="minimal-textarea"
              rows={4}
              autoFocus
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your explanation here for your tutor..."
              style={{ resize: 'vertical', minHeight: '110px' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              type="submit"
              className="btn-primary"
              disabled={!answer.trim() || isSubmitting}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Send size={14} />
              <span>{isSubmitting ? 'Submitting...' : 'Send Response to Tutor'}</span>
            </button>

            <div style={{ fontSize: '0.72rem', color: 'var(--hai-slate)', textAlign: 'center' }}>
              Lesson paused by Tutor • Answer carefully
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
