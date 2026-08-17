import React, { useState } from 'react';
import { useWebSocket } from '../../context/WebSocketContext';
import { QUESTION_BANK_100 } from '../../data/question_bank_100';
import { QUESTION_BANK } from '../../data/question_bank';
import { LearningTechnique, QuestionBankItem, QuizTier, ComprehensiveQuizQuestion } from '../../types';
import { Send, XCircle, Sparkles, Key } from 'lucide-react';

export const InterruptConsole: React.FC = () => {
  const {
    triggerInterrupt,
    activeInterrupt,
    dismissInterrupt,
    triggerLockedQuiz,
    activeLockedQuiz,
    dismissLockedQuiz
  } = useWebSocket();

  const [activeConsoleTab, setActiveConsoleTab] = useState<'interrupts' | 'quiz_dispatch' | 'answer_keys'>('quiz_dispatch');

  // Interrupt state
  const [selectedTechnique, setSelectedTechnique] = useState<LearningTechnique>('socratic');
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionBankItem | null>(() => {
    return QUESTION_BANK.find((q) => q.technique === 'socratic') || QUESTION_BANK[0];
  });
  const [customTitle, setCustomTitle] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);

  // Quiz Dispatcher state
  const [dispatchTier, setDispatchTier] = useState<QuizTier>(10);
  const [quizFilterCategory, setQuizFilterCategory] = useState<string>('All');
  const [inspectedQuestion, setInspectedQuestion] = useState<ComprehensiveQuizQuestion | null>(QUESTION_BANK_100[0]);

  const availableInterruptQuestions = QUESTION_BANK.filter((q) => q.technique === selectedTechnique);

  const handleTechniqueChange = (tech: LearningTechnique) => {
    setSelectedTechnique(tech);
    setIsCustomMode(false);
    const matches = QUESTION_BANK.filter((q) => q.technique === tech);
    if (matches.length > 0) {
      setSelectedQuestion(matches[0]);
    }
  };

  const handleDispatchInterrupt = () => {
    if (isCustomMode) {
      if (!customPrompt.trim()) return;
      triggerInterrupt({
        technique: 'custom',
        title: customTitle.trim() || 'Tutor Live Challenge',
        prompt: customPrompt.trim(),
        context: 'Live Lab Session',
        guide: 'Tutor live custom evaluation',
        triggerSource: 'admin',
        required: true
      });
      setCustomPrompt('');
    } else if (selectedQuestion) {
      triggerInterrupt({
        technique: selectedQuestion.technique,
        title: selectedQuestion.title,
        prompt: selectedQuestion.prompt,
        context: selectedQuestion.context,
        guide: selectedQuestion.guide,
        triggerSource: 'admin',
        required: true
      });
    }
  };

  const handleDispatchQuizToKate = (tier: QuizTier) => {
    const questionsPool = QUESTION_BANK_100.filter((q) => {
      if (quizFilterCategory === 'All') return true;
      return q.category === quizFilterCategory;
    });

    const shuffled = [...questionsPool].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffled.slice(0, Math.min(tier, shuffled.length));

    triggerLockedQuiz({
      tier,
      title: `ANPH111 Laboratory Mastery Quiz (${tier} Questions)`,
      questions: selectedQuestions,
      triggeredBy: 'admin'
    });
  };

  const categories = ['All', ...Array.from(new Set(QUESTION_BANK_100.map((q) => q.category)))];

  const filtered100Bank = QUESTION_BANK_100.filter((q) => {
    if (quizFilterCategory === 'All') return true;
    return q.category === quizFilterCategory;
  });

  return (
    <div className="editorial-card" style={{ padding: '1.5rem' }}>
      {/* Console Nav Tabs */}
      <div style={{ display: 'flex', gap: '0.4rem', borderBottom: '1px solid var(--sakura-border)', paddingBottom: '0.75rem', marginBottom: '1.25rem', overflowX: 'auto' }}>
        <button
          className={activeConsoleTab === 'quiz_dispatch' ? 'btn-primary' : 'btn-minimal'}
          onClick={() => setActiveConsoleTab('quiz_dispatch')}
          style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
        >
          <Sparkles size={14} />
          <span>Dispatch Real-Time Quiz</span>
        </button>

        <button
          className={activeConsoleTab === 'interrupts' ? 'btn-primary' : 'btn-minimal'}
          onClick={() => setActiveConsoleTab('interrupts')}
          style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
        >
          <Send size={14} />
          <span>Socratic Pop-ups</span>
        </button>

        <button
          className={activeConsoleTab === 'answer_keys' ? 'btn-primary' : 'btn-minimal'}
          onClick={() => setActiveConsoleTab('answer_keys')}
          style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
        >
          <Key size={14} />
          <span>100+ Answer Keys & Rubrics</span>
        </button>
      </div>

      {/* 1. QUIZ DISPATCHER TAB */}
      {activeConsoleTab === 'quiz_dispatch' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <span className="category-tag">Real-Time Screen Locking</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
                Dispatch Locked Assessment to Kate
              </h2>
            </div>

            {activeLockedQuiz && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', background: 'rgba(232, 122, 144, 0.12)', color: 'var(--nadeshiko-dark)', padding: '0.3rem 0.65rem', borderRadius: 'var(--radius-pill)', fontWeight: 600 }}>
                  Active on Kate's Screen ({activeLockedQuiz.tier}Q)
                </span>
                <button className="btn-minimal" onClick={dismissLockedQuiz} style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}>
                  <XCircle size={13} />
                  <span>Dismiss</span>
                </button>
              </div>
            )}
          </div>

          <p style={{ fontSize: '0.82rem', color: 'var(--hai-slate)', marginBottom: '1.25rem' }}>
            Selecting a tier will instantly broadcast a locked assessment modal to Kate's screen. The modal will not close until she completes and submits her answers.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.65rem', marginBottom: '1.5rem' }}>
            {([10, 15, 20, 25, 50] as QuizTier[]).map((tier) => (
              <button
                key={tier}
                onClick={() => setDispatchTier(tier)}
                style={{
                  padding: '0.85rem 0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  background: dispatchTier === tier ? 'var(--sakura-soft)' : 'var(--shironeri-silk)',
                  border: `1px solid ${dispatchTier === tier ? 'var(--nadeshiko-rose)' : 'var(--hai-border)'}`,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: dispatchTier === tier ? 'var(--nadeshiko-dark)' : 'var(--sumi-ink)' }}>
                  {tier} Items
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--hai-slate)', marginTop: '2px' }}>
                  {tier === 10 ? 'Quick Drill' : tier === 15 ? 'Deep Check' : tier === 20 ? 'Clinical' : tier === 25 ? 'Sprint' : 'Final Exam'}
                </div>
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--shironeri-silk)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--hai-border)' }}>
            <div>
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--sumi-ink)' }}>
                Ready to Dispatch: {dispatchTier} Items Assessment
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--hai-slate)' }}>
                Drawn from the 100+ Question Bank with auto-scoring and rubric keys
              </div>
            </div>

            <button
              className="btn-primary"
              onClick={() => handleDispatchQuizToKate(dispatchTier)}
              style={{ padding: '0.6rem 1.4rem' }}
            >
              <Sparkles size={14} />
              <span>Launch Quiz on Kate's Screen</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. SOCRATIC INTERRUPTS TAB */}
      {activeConsoleTab === 'interrupts' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <span className="category-tag">Cognitive Checkpoints</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
                Dispatch Socratic Pop-up to Kate
              </h2>
            </div>

            {activeInterrupt && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', background: 'rgba(232, 122, 144, 0.12)', color: 'var(--nadeshiko-dark)', padding: '0.3rem 0.65rem', borderRadius: 'var(--radius-pill)', fontWeight: 600 }}>
                  Active Pop-up on Kate's Screen
                </span>
                <button className="btn-minimal" onClick={dismissInterrupt} style={{ fontSize: '0.75rem', padding: '0.3rem 0.6rem' }}>
                  <XCircle size={13} />
                  <span>Dismiss</span>
                </button>
              </div>
            )}
          </div>

          {/* Technique Tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {(['socratic', 'feynman', 'recall', 'clinical', 'spot_mistake'] as LearningTechnique[]).map((tech) => {
              const isSelected = selectedTechnique === tech && !isCustomMode;
              return (
                <button
                  key={tech}
                  onClick={() => handleTechniqueChange(tech)}
                  style={{
                    padding: '0.65rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    background: isSelected ? 'var(--sakura-soft)' : 'var(--shironeri-silk)',
                    border: `1px solid ${isSelected ? 'var(--nadeshiko-rose)' : 'var(--hai-border)'}`,
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: isSelected ? 'var(--nadeshiko-dark)' : 'var(--sumi-ink)',
                    textTransform: 'capitalize'
                  }}
                >
                  {tech.replace('_', ' ')}
                </button>
              );
            })}
            <button
              onClick={() => setIsCustomMode(true)}
              style={{
                padding: '0.65rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                background: isCustomMode ? 'var(--sakura-soft)' : 'var(--shironeri-silk)',
                border: `1px solid ${isCustomMode ? 'var(--nadeshiko-rose)' : 'var(--hai-border)'}`,
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: isCustomMode ? 'var(--nadeshiko-dark)' : 'var(--sumi-ink)'
              }}
            >
              Custom Challenge
            </button>
          </div>

          {!isCustomMode ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {availableInterruptQuestions.map((q) => {
                const isSelected = selectedQuestion?.id === q.id;
                return (
                  <div
                    key={q.id}
                    onClick={() => setSelectedQuestion(q)}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'var(--sakura-mist)' : 'var(--gofun-white)',
                      border: `1px solid ${isSelected ? 'var(--sakura-border-hover)' : 'var(--hai-border)'}`,
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontWeight: 600, fontSize: '0.86rem', color: isSelected ? 'var(--nadeshiko-dark)' : 'var(--sumi-ink)' }}>
                      {q.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--sumi-light)', marginTop: '2px' }}>
                      {q.prompt}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <input
                type="text"
                className="minimal-input"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder="Title e.g. Socratic: Why 15 minutes for eye flush?"
              />
              <textarea
                className="minimal-textarea"
                rows={3}
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Type your challenge question for Kate..."
              />
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              className="btn-primary"
              onClick={handleDispatchInterrupt}
              disabled={isCustomMode ? !customPrompt.trim() : !selectedQuestion}
            >
              <Send size={14} />
              <span>Send Socratic Interrupt</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. ANSWER KEYS & RUBRICS TAB */}
      {activeConsoleTab === 'answer_keys' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <span className="category-tag">100+ Question Bank</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
                Master Answer Key & Rubrics
              </h2>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--hai-slate)' }}>{filtered100Bank.length} Questions</span>
          </div>

          {/* Category Filter Chips */}
          <div className="section-chips-scroller" style={{ marginBottom: '1rem' }}>
            {categories.map((c) => (
              <button
                key={c}
                className={`section-chip-btn ${quizFilterCategory === c ? 'active' : ''}`}
                onClick={() => setQuizFilterCategory(c)}
                style={{ fontSize: '0.74rem', padding: '0.3rem 0.65rem' }}
              >
                <span>{c}</span>
              </button>
            ))}
          </div>

          {/* Question List & Answer Inspector */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div style={{ maxHeight: '420px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {filtered100Bank.map((q, idx) => {
                const isSelected = inspectedQuestion?.id === q.id;
                return (
                  <button
                    key={q.id}
                    onClick={() => setInspectedQuestion(q)}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'var(--sakura-soft)' : 'var(--shironeri-silk)',
                      border: `1px solid ${isSelected ? 'var(--nadeshiko-rose)' : 'var(--hai-border)'}`,
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--nadeshiko-dark)' }}>
                        Q{idx + 1} • {q.type.replace('_', ' ')}
                      </span>
                      <span style={{ fontSize: '0.68rem', color: 'var(--hai-slate)' }}>{q.difficulty}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--sumi-ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {q.question}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Inspected Key Details */}
            {inspectedQuestion && (
              <div style={{ background: '#FFFFFF', border: '1px solid var(--sakura-border-hover)', borderRadius: 'var(--radius-sm)', padding: '1.15rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="category-tag">{inspectedQuestion.category}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--hai-slate)', textTransform: 'uppercase', fontWeight: 600 }}>
                    {inspectedQuestion.type.replace('_', ' ')}
                  </span>
                </div>

                <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--sumi-ink)', marginBottom: '0.85rem', lineHeight: 1.45 }}>
                  {inspectedQuestion.question}
                </h4>

                {/* Model Answer Key */}
                <div style={{ background: 'rgba(76, 175, 80, 0.08)', border: '1px solid rgba(76, 175, 80, 0.3)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', fontWeight: 600, color: '#2E7D32', marginBottom: '0.25rem' }}>
                    <Key size={13} />
                    <span>Official Answer Key:</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#1B5E20', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                    {inspectedQuestion.modelAnswer}
                  </div>
                </div>

                {/* Rubric Guide for Tutor */}
                <div style={{ background: 'var(--sakura-mist)', border: '1px solid var(--sakura-border)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--nadeshiko-dark)', marginBottom: '0.25rem' }}>
                    Grading Rubric Guide:
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--sumi-ink)', lineHeight: 1.45 }}>
                    {inspectedQuestion.rubricGuide}
                  </div>
                </div>

                {/* Socratic Clue */}
                <div style={{ fontSize: '0.78rem', color: 'var(--hai-slate)', fontStyle: 'italic' }}>
                  💡 Socratic Clue for Kate (shown if wrong): "{inspectedQuestion.socraticClue}"
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
