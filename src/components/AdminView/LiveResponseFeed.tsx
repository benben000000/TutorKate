import React, { useState } from 'react';
import { useWebSocket } from '../../context/WebSocketContext';
import { useLanguage } from '../../context/LanguageContext';
import { Clock, CheckCircle2, Send, Award, Key, Check, X } from 'lucide-react';

export const LiveResponseFeed: React.FC = () => {
  const { responses, quizSubmissions, sendFeedback } = useWebSocket();
  const { t } = useLanguage();
  const [activeFeedTab, setActiveFeedTab] = useState<'quizzes' | 'interrupts'>('quizzes');
  const [feedbackNotes, setFeedbackNotes] = useState<Record<string, string>>({});
  const [feedbackRating, setFeedbackRating] = useState<Record<string, 'mastered' | 'good_effort' | 'review_needed'>>({});

  const handleSendEvaluation = (respId: string) => {
    const rating = feedbackRating[respId] || 'mastered';
    const notes = feedbackNotes[respId] || '';
    sendFeedback(respId, rating, notes);
  };

  return (
    <div className="editorial-card" style={{ padding: '1.5rem' }}>
      {/* Header & Sub-Tab Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <div>
          <span className="category-tag">Live Grading & Evaluation</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
            Student Response Stream
          </h2>
        </div>

        <div style={{ display: 'flex', gap: '0.4rem' }}>
          <button
            className={activeFeedTab === 'quizzes' ? 'btn-primary' : 'btn-minimal'}
            onClick={() => setActiveFeedTab('quizzes')}
            style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
          >
            <Award size={13} />
            <span>Quizzes ({quizSubmissions.length})</span>
          </button>
          <button
            className={activeFeedTab === 'interrupts' ? 'btn-primary' : 'btn-minimal'}
            onClick={() => setActiveFeedTab('interrupts')}
            style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
          >
            <span>Interrupts ({responses.length})</span>
          </button>
        </div>
      </div>

      {/* QUIZ SUBMISSIONS TAB */}
      {activeFeedTab === 'quizzes' && (
        <div>
          {quizSubmissions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--hai-slate)', fontSize: '0.86rem' }}>
              No quiz submissions logged yet. When Kate submits a quiz, her answers will stream here with the full Answer Key and Rubrics.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {quizSubmissions.map((sub) => {
                const percent = Math.round((sub.score / sub.totalQuestions) * 100);
                return (
                  <div
                    key={sub.id}
                    style={{
                      background: 'var(--shironeri-silk)',
                      border: '1px solid var(--sakura-border)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem'
                    }}
                  >
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid var(--sakura-border)', paddingBottom: '0.65rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="category-tag">Assessment Submission</span>
                        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--sumi-ink)' }}>
                          {sub.studentName}
                        </span>
                        <span style={{ fontSize: '0.72rem', background: 'var(--sakura-soft)', color: 'var(--nadeshiko-dark)', padding: '0.15rem 0.45rem', borderRadius: 'var(--radius-pill)', fontWeight: 600 }}>
                          {sub.tier} Questions
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: percent >= 80 ? '#2E7D32' : 'var(--nadeshiko-dark)' }}>
                          {sub.score}/{sub.totalQuestions} ({percent}%)
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--hai-slate)' }}>
                          {new Date(sub.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>

                    {/* Question breakdown with Answer Key comparison */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {sub.questions?.map((q, idx) => {
                        const studentAns = sub.answers[q.id];
                        const isMCQ = q.type === 'multiple_choice';
                        const isCorrect = isMCQ && studentAns === q.correctIndex;

                        return (
                          <div
                            key={q.id || idx}
                            style={{
                              background: '#FFFFFF',
                              border: `1px solid ${isMCQ ? (isCorrect ? 'rgba(76, 175, 80, 0.3)' : 'var(--sakura-border)') : 'var(--sakura-border)'}`,
                              borderRadius: 'var(--radius-sm)',
                              padding: '0.85rem 1rem'
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                              <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--nadeshiko-dark)' }}>
                                Q{idx + 1}: {q.category} ({q.type.replace('_', ' ')})
                              </span>
                              {isMCQ && (
                                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: isCorrect ? '#2E7D32' : 'var(--nadeshiko-dark)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                                  {isCorrect ? <Check size={13} /> : <X size={13} />}
                                  {isCorrect ? 'Correct (Auto-Checked)' : 'Incorrect'}
                                </span>
                              )}
                            </div>

                            <div style={{ fontSize: '0.84rem', fontWeight: 500, color: 'var(--sumi-ink)', marginBottom: '0.5rem' }}>
                              {q.question}
                            </div>

                            {/* Student's answer */}
                            <div style={{ background: 'var(--shironeri-silk)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', color: 'var(--sumi-ink)', marginBottom: '0.5rem' }}>
                              <strong>Kate's Answer: </strong>
                              {isMCQ && q.options && studentAns !== undefined
                                ? `${String.fromCharCode(65 + studentAns)}. ${q.options[studentAns]}`
                                : Array.isArray(studentAns)
                                ? studentAns.join(', ')
                                : studentAns || '(No response provided)'}
                            </div>

                            {/* Instructor Official Answer Key */}
                            <div style={{ background: 'rgba(76, 175, 80, 0.06)', border: '1px solid rgba(76, 175, 80, 0.2)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: '#1B5E20' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600, marginBottom: '2px' }}>
                                <Key size={12} />
                                <span>Official Answer Key & Rubric:</span>
                              </div>
                              <div style={{ whiteSpace: 'pre-line' }}>{q.modelAnswer}</div>
                              {q.rubricGuide && (
                                <div style={{ fontSize: '0.74rem', color: '#2E7D32', marginTop: '4px', fontStyle: 'italic' }}>
                                  Rubric: {q.rubricGuide}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* INTERRUPTS TAB */}
      {activeFeedTab === 'interrupts' && (
        <div>
          {responses.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--hai-slate)', fontSize: '0.86rem' }}>
              {t('admin.noResponses')}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {responses.map((resp) => {
                const hasFeedback = !!resp.feedback;
                return (
                  <div
                    key={resp.id}
                    style={{
                      background: 'var(--shironeri-silk)',
                      border: '1px solid var(--sakura-border)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.25rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.65rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="category-tag" style={{ textTransform: 'capitalize' }}>
                          {resp.technique}
                        </span>
                        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--sumi-ink)' }}>
                          {resp.studentName}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.74rem', color: 'var(--hai-slate)' }}>
                        <Clock size={12} />
                        <span>{resp.timeTakenSeconds}s</span>
                        <span>•</span>
                        <span>{new Date(resp.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </div>

                    <div style={{ fontSize: '0.84rem', color: 'var(--hai-slate)', marginBottom: '0.65rem', fontStyle: 'italic' }}>
                      "{resp.prompt}"
                    </div>

                    <div
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid var(--sakura-border-hover)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '0.85rem 1rem',
                        fontSize: '0.9rem',
                        color: 'var(--sumi-ink)',
                        lineHeight: 1.6,
                        marginBottom: '0.85rem',
                        whiteSpace: 'pre-wrap'
                      }}
                    >
                      {resp.answer}
                    </div>

                    {hasFeedback ? (
                      <div
                        style={{
                          background: 'var(--sakura-mist)',
                          border: '1px solid var(--sakura-border)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '0.75rem 1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <CheckCircle2 size={16} color="var(--nadeshiko-dark)" />
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--nadeshiko-dark)' }}>
                            Evaluation: {resp.feedback?.rating === 'mastered' ? 'Mastered' : resp.feedback?.rating === 'good_effort' ? 'Good Effort' : 'Review Needed'}
                          </div>
                          {resp.feedback?.notes && (
                            <div style={{ fontSize: '0.78rem', color: 'var(--sumi-ink)', marginTop: '2px' }}>
                              "{resp.feedback.notes}"
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div style={{ borderTop: '1px solid var(--sakura-border)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                          {(['mastered', 'good_effort', 'review_needed'] as const).map((r) => {
                            const isSelected = (feedbackRating[resp.id] || 'mastered') === r;
                            const label = r === 'mastered' ? 'Mastered' : r === 'good_effort' ? 'Good Effort' : 'Review';
                            return (
                              <button
                                key={r}
                                onClick={() => setFeedbackRating((prev) => ({ ...prev, [resp.id]: r }))}
                                style={{
                                  fontSize: '0.72rem',
                                  padding: '0.2rem 0.55rem',
                                  borderRadius: 'var(--radius-pill)',
                                  background: isSelected ? 'var(--nadeshiko-rose)' : 'var(--gofun-white)',
                                  color: isSelected ? '#FFFFFF' : 'var(--sumi-light)',
                                  border: `1px solid ${isSelected ? 'var(--nadeshiko-rose)' : 'var(--hai-border)'}`,
                                  cursor: 'pointer'
                                }}
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>

                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <input
                            type="text"
                            className="minimal-input"
                            placeholder="Feedback / score notes for Kate..."
                            value={feedbackNotes[resp.id] || ''}
                            onChange={(e) => setFeedbackNotes({ ...feedbackNotes, [resp.id]: e.target.value })}
                            style={{ fontSize: '0.82rem', padding: '0.4rem 0.65rem' }}
                          />
                          <button
                            className="btn-primary"
                            onClick={() => handleSendEvaluation(resp.id)}
                            style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                          >
                            <Send size={12} />
                            <span>Send</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
