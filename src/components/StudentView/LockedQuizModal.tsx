import React, { useState } from 'react';
import { useWebSocket } from '../../context/WebSocketContext';
import { ComprehensiveQuizQuestion } from '../../types';
import { Send, ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LockedQuizModal: React.FC = () => {
  const { activeLockedQuiz, submitLockedQuiz } = useWebSocket();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!activeLockedQuiz || !activeLockedQuiz.questions || activeLockedQuiz.questions.length === 0) {
    return null;
  }

  const questions: ComprehensiveQuizQuestion[] = activeLockedQuiz.questions;
  const currentQ = questions[currentIdx];

  const handleSelectMCQ = (optIdx: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optIdx
    }));
  };

  const handleEnumerationChange = (itemIdx: number, val: string) => {
    const prevItems = (answers[currentQ.id] as string[]) || [];
    const nextItems = [...prevItems];
    nextItems[itemIdx] = val;
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: nextItems
    }));
  };

  const handleEssayChange = (val: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: val
    }));
  };

  const handleSubmitQuiz = () => {
    setIsSubmitting(true);

    // Calculate score for objective MCQ items
    let score = 0;
    questions.forEach((q) => {
      if (q.type === 'multiple_choice' && answers[q.id] === q.correctIndex) {
        score += 1;
      }
    });

    submitLockedQuiz(activeLockedQuiz.id, answers, score, questions.length, questions);

    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F8C3CD', '#E87A90', '#F19483']
      });
    } catch (e) {}

    setTimeout(() => {
      setIsSubmitting(false);
    }, 400);
  };

  const answeredCount = Object.keys(answers).filter((k) => {
    const v = answers[k];
    if (typeof v === 'number') return true;
    if (Array.isArray(v)) return v.some((i) => i && i.trim().length > 0);
    if (typeof v === 'string') return v.trim().length > 0;
    return false;
  }).length;

  return (
    <div
      className="interrupt-backdrop"
      style={{ zIndex: 1200, background: 'rgba(45, 41, 38, 0.7)' }}
    >
      <div
        className="interrupt-modal"
        style={{
          maxWidth: '680px',
          width: '100%',
          maxHeight: '90dvh',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.75rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
        }}
      >
        {/* Header Ribbon */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--sakura-border)', paddingBottom: '0.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
              <span className="category-tag" style={{ color: 'var(--nadeshiko-dark)' }}>
                Locked Assessment
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--hai-light)' }}>•</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--hai-slate)' }}>
                {activeLockedQuiz.triggeredBy === 'admin' ? 'Dispatched by Instructor' : 'Adaptive Socratic Challenge'}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--sumi-ink)' }}>
              {activeLockedQuiz.title}
            </h2>
          </div>

          <div
            style={{
              background: 'var(--sakura-soft)',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--sakura-border)',
              fontSize: '0.75rem',
              color: 'var(--nadeshiko-dark)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Clock size={12} />
            <span>{answeredCount}/{questions.length} Answered</span>
          </div>
        </div>

        {/* Question Stepper Indicator */}
        <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem', overflowX: 'auto', paddingBottom: '4px' }}>
          {questions.map((q, idx) => {
            const isAnswered = answers[q.id] !== undefined;
            const isCurrent = idx === currentIdx;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(idx)}
                style={{
                  flex: 1,
                  minWidth: '18px',
                  height: '6px',
                  borderRadius: '3px',
                  background: isCurrent
                    ? 'var(--nadeshiko-rose)'
                    : isAnswered
                    ? 'var(--sakura-blush)'
                    : 'var(--hai-border)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title={`Question ${idx + 1}`}
              />
            );
          })}
        </div>

        {/* Scrollable Question Body */}
        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.25rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span className="category-tag">
              Question {currentIdx + 1} of {questions.length} • {currentQ.category}
            </span>
            <span
              style={{
                fontSize: '0.7rem',
                padding: '0.2rem 0.5rem',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--shironeri-silk)',
                border: '1px solid var(--hai-border)',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--hai-slate)'
              }}
            >
              {currentQ.type.replace('_', ' ')}
            </span>
          </div>

          <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--sumi-ink)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
            {currentQ.question}
          </h3>

          {/* Multiple Choice Format */}
          {currentQ.type === 'multiple_choice' && currentQ.options && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = answers[currentQ.id] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectMCQ(optIdx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'var(--sakura-soft)' : 'var(--gofun-white)',
                      border: `1px solid ${isSelected ? 'var(--nadeshiko-rose)' : 'var(--sakura-border)'}`,
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      color: isSelected ? 'var(--nadeshiko-dark)' : 'var(--sumi-ink)',
                      transition: 'all 0.2s ease',
                      width: '100%',
                      minHeight: '52px'
                    }}
                  >
                    <span
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: isSelected ? 'var(--nadeshiko-rose)' : 'var(--shironeri-silk)',
                        color: isSelected ? '#FFFFFF' : 'var(--sumi-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        flexShrink: 0
                      }}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span style={{ lineHeight: 1.4 }}>{opt}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Enumeration Format */}
          {currentQ.type === 'enumeration' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--hai-slate)', marginBottom: '0.25rem' }}>
                Please list {currentQ.enumerationCount || 4} distinct items:
              </div>
              {Array.from({ length: currentQ.enumerationCount || 4 }).map((_, itemIdx) => {
                const currentItems = (answers[currentQ.id] as string[]) || [];
                return (
                  <div key={itemIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        background: 'var(--sakura-soft)',
                        color: 'var(--nadeshiko-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        flexShrink: 0
                      }}
                    >
                      {itemIdx + 1}
                    </span>
                    <input
                      type="text"
                      className="minimal-input"
                      value={currentItems[itemIdx] || ''}
                      onChange={(e) => handleEnumerationChange(itemIdx, e.target.value)}
                      placeholder={`Item ${itemIdx + 1}...`}
                      style={{ fontSize: '0.88rem', padding: '0.55rem 0.85rem' }}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* Diagram Labeling Format */}
          {currentQ.type === 'diagram_label' && currentQ.diagramUrl && currentQ.diagramLabels && (
            <div>
              <div
                style={{
                  textAlign: 'center',
                  background: 'var(--shironeri-silk)',
                  border: '1px solid var(--sakura-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem',
                  marginBottom: '1rem'
                }}
              >
                <img
                  src={currentQ.diagramUrl}
                  alt={currentQ.diagramTitle || 'Anatomical Diagram'}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '320px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'block',
                    margin: '0 auto',
                    objectFit: 'contain'
                  }}
                />
                {currentQ.diagramTitle && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--hai-slate)', fontStyle: 'italic', marginTop: '0.4rem' }}>
                    {currentQ.diagramTitle}
                  </div>
                )}
              </div>

              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--sumi-ink)', marginBottom: '0.5rem' }}>
                Select matching anatomical label for each pointer:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {currentQ.diagramLabels.map((dl) => {
                  const currentVal = (answers[currentQ.id] as Record<string, string>)?.[dl.id] || '';

                  return (
                    <div
                      key={dl.id}
                      style={{
                        background: 'var(--gofun-white)',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--sakura-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.3rem'
                      }}
                    >
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--nadeshiko-dark)' }}>
                        Pointer {dl.labelNumber}: {dl.targetName}
                      </div>

                      {dl.options ? (
                        <select
                          value={currentVal}
                          onChange={(e) => {
                            const prevLabels = (answers[currentQ.id] as Record<string, string>) || {};
                            setAnswers((prev) => ({
                              ...prev,
                              [currentQ.id]: {
                                ...prevLabels,
                                [dl.id]: e.target.value
                              }
                            }));
                          }}
                          style={{
                            width: '100%',
                            padding: '0.5rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--hai-border)',
                            background: 'var(--shironeri-silk)',
                            fontSize: '0.84rem',
                            color: 'var(--sumi-ink)',
                            outline: 'none'
                          }}
                        >
                          <option value="">-- Select matching label --</option>
                          {dl.options.map((opt, oIdx) => (
                            <option key={oIdx} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          placeholder="Type anatomical label..."
                          value={currentVal}
                          onChange={(e) => {
                            const prevLabels = (answers[currentQ.id] as Record<string, string>) || {};
                            setAnswers((prev) => ({
                              ...prev,
                              [currentQ.id]: {
                                ...prevLabels,
                                [dl.id]: e.target.value
                              }
                            }));
                          }}
                          className="minimal-input"
                          style={{ fontSize: '0.84rem', padding: '0.45rem 0.75rem' }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Essay & Socratic Format */}
          {(currentQ.type === 'essay' || currentQ.type === 'socratic') && (
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--sumi-light)', marginBottom: '0.4rem' }}>
                Your Clinical & Theoretical Reasoning:
              </label>
              <textarea
                className="minimal-textarea"
                rows={5}
                value={(answers[currentQ.id] as string) || ''}
                onChange={(e) => handleEssayChange(e.target.value)}
                placeholder="Write your comprehensive analysis, step-by-step actions, and clinical rationale..."
                style={{ resize: 'vertical', minHeight: '120px' }}
              />
            </div>
          )}
        </div>

        {/* Footer Navigation & Submit Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--sakura-border)', paddingTop: '1rem' }}>
          <button
            className="btn-minimal"
            onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
            disabled={currentIdx === 0}
            style={{ opacity: currentIdx === 0 ? 0.35 : 1 }}
          >
            <ArrowLeft size={14} />
            <span>Prev</span>
          </button>

          {currentIdx < questions.length - 1 ? (
            <button
              className="btn-primary"
              onClick={() => setCurrentIdx((prev) => prev + 1)}
              style={{ padding: '0.55rem 1.25rem' }}
            >
              <span>Next</span>
              <ArrowRight size={14} />
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={handleSubmitQuiz}
              disabled={isSubmitting || answeredCount === 0}
              style={{ padding: '0.55rem 1.4rem' }}
            >
              <Send size={14} />
              <span>{isSubmitting ? 'Submitting...' : 'Submit Quiz to Tutor'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
