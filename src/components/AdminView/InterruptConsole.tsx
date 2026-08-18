import React, { useState } from 'react';
import { useWebSocket } from '../../context/WebSocketContext';
import { QUESTION_BANK_100 } from '../../data/question_bank_100';
import { HUMAN_BODY_QUESTION_BANK } from '../../data/question_bank_human_body';
import { QUESTION_BANK } from '../../data/question_bank';
import { LearningTechnique, QuestionBankItem, QuizTier, ComprehensiveQuizQuestion } from '../../types';
import { Send, XCircle, Sparkles, Key, BookOpen, Layers } from 'lucide-react';

export const InterruptConsole: React.FC = () => {
  const {
    triggerInterrupt,
    activeInterrupt,
    dismissInterrupt,
    triggerLockedQuiz,
    activeLockedQuiz,
    dismissLockedQuiz
  } = useWebSocket();

  const [activeConsoleTab, setActiveConsoleTab] = useState<'quiz_dispatch' | 'interrupts' | 'answer_keys'>('quiz_dispatch');

  // Interrupt state
  const [selectedTechnique, setSelectedTechnique] = useState<LearningTechnique>('socratic');
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionBankItem | null>(() => {
    return QUESTION_BANK.find((q) => q.technique === 'socratic') || QUESTION_BANK[0];
  });
  const [customTitle, setCustomTitle] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);

  // Quiz Dispatcher state
  const [dispatchModule, setDispatchModule] = useState<'human_body' | 'lab_safety'>('human_body');
  const [dispatchPart, setDispatchPart] = useState<1 | 2 | 3 | 'final'>(1);
  const [dispatchTier, setDispatchTier] = useState<QuizTier>(10);
  const [answerKeyModule, setAnswerKeyModule] = useState<'human_body' | 'lab_safety'>('human_body');
  const [answerKeyCategory, setAnswerKeyCategory] = useState<string>('All');
  const [inspectedQuestion, setInspectedQuestion] = useState<ComprehensiveQuizQuestion | null>(HUMAN_BODY_QUESTION_BANK[0]);

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
        context: 'Live Anatomy Session',
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

  const handleDispatchHumanBodyQuiz = (part: 1 | 2 | 3 | 'final') => {
    let questions: ComprehensiveQuizQuestion[] = [];
    let title = '';

    if (part === 1) {
      questions = HUMAN_BODY_QUESTION_BANK.filter((q) => q.partNumber === 1);
      title = 'ANPH111 Part 1 Quiz: Foundations, 6 Levels & 11 Organ Systems (10 Items)';
    } else if (part === 2) {
      questions = HUMAN_BODY_QUESTION_BANK.filter((q) => q.partNumber === 2);
      title = 'ANPH111 Part 2 Quiz: Homeostasis, Feedback Loops & Directional Terms (10 Items)';
    } else if (part === 3) {
      questions = HUMAN_BODY_QUESTION_BANK.filter((q) => q.partNumber === 3);
      title = 'ANPH111 Part 3 Quiz: Body Regions, Quadrants, Planes & Cavities (10 Items)';
    } else {
      questions = HUMAN_BODY_QUESTION_BANK.filter((q) => q.partNumber === 'final');
      title = 'ANPH111 Unit 1 Final Comprehensive Examination: The Human Body (30 Items)';
    }

    triggerLockedQuiz({
      tier: (questions.length as QuizTier) || 10,
      title,
      questions,
      triggeredBy: 'admin'
    });
  };

  const handleDispatchLabSafetyQuiz = (tier: QuizTier) => {
    const shuffled = [...QUESTION_BANK_100].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(tier, shuffled.length));

    triggerLockedQuiz({
      tier,
      title: `ANPH111 Laboratory Safety Assessment (${tier} Items)`,
      questions: selected,
      triggeredBy: 'admin'
    });
  };

  const currentAnswerKeyBank = answerKeyModule === 'human_body' ? HUMAN_BODY_QUESTION_BANK : QUESTION_BANK_100;
  const categories = ['All', ...Array.from(new Set(currentAnswerKeyBank.map((q) => q.category)))];

  const filteredAnswerKeys = currentAnswerKeyBank.filter((q) => {
    if (answerKeyCategory === 'All') return true;
    return q.category === answerKeyCategory;
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
          <span>Dispatch Real-Time Assessment</span>
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
          <span>Answer Keys & Rubrics ({currentAnswerKeyBank.length}+ Items)</span>
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

          {/* Module Selector */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <button
              className={dispatchModule === 'human_body' ? 'btn-primary' : 'btn-minimal'}
              onClick={() => setDispatchModule('human_body')}
              style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}
            >
              <BookOpen size={14} />
              <span>Unit 1: The Human Body (Lecture)</span>
            </button>

            <button
              className={dispatchModule === 'lab_safety' ? 'btn-primary' : 'btn-minimal'}
              onClick={() => setDispatchModule('lab_safety')}
              style={{ fontSize: '0.82rem', padding: '0.45rem 0.85rem' }}
            >
              <Layers size={14} />
              <span>Week 1: Lab Safety (Laboratory)</span>
            </button>
          </div>

          {/* Human Body Part Quizzes & Final Exam Dispatcher */}
          {dispatchModule === 'human_body' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                <div
                  style={{
                    background: dispatchPart === 1 ? 'var(--sakura-soft)' : 'var(--shironeri-silk)',
                    border: `1px solid ${dispatchPart === 1 ? 'var(--nadeshiko-rose)' : 'var(--hai-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => setDispatchPart(1)}
                >
                  <div style={{ fontSize: '0.75rem', color: '#4CAF50', fontWeight: 600 }}>PART 1 (10 Items)</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
                    Foundations & 11 Systems
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--hai-slate)', marginTop: '4px' }}>
                    Includes 6 structural levels diagrams
                  </div>
                </div>

                <div
                  style={{
                    background: dispatchPart === 2 ? 'var(--sakura-soft)' : 'var(--shironeri-silk)',
                    border: `1px solid ${dispatchPart === 2 ? 'var(--nadeshiko-rose)' : 'var(--hai-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => setDispatchPart(2)}
                >
                  <div style={{ fontSize: '0.75rem', color: '#2196F3', fontWeight: 600 }}>PART 2 (10 Items)</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
                    Homeostasis & Directional Terms
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--hai-slate)', marginTop: '4px' }}>
                    Includes feedback loop diagrams
                  </div>
                </div>

                <div
                  style={{
                    background: dispatchPart === 3 ? 'var(--sakura-soft)' : 'var(--shironeri-silk)',
                    border: `1px solid ${dispatchPart === 3 ? 'var(--nadeshiko-rose)' : 'var(--hai-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => setDispatchPart(3)}
                >
                  <div style={{ fontSize: '0.75rem', color: '#9C27B0', fontWeight: 600 }}>PART 3 (10 Items)</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
                    Regions, Planes & Cavities
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--hai-slate)', marginTop: '4px' }}>
                    Includes abdominal quadrants & planes
                  </div>
                </div>

                <div
                  style={{
                    background: dispatchPart === 'final' ? 'var(--sakura-soft)' : 'var(--shironeri-silk)',
                    border: `2px solid ${dispatchPart === 'final' ? 'var(--nadeshiko-rose)' : 'var(--sakura-border)'}`,
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem',
                    cursor: 'pointer',
                    gridColumn: '1 / -1'
                  }}
                  onClick={() => setDispatchPart('final')}
                >
                  <div style={{ fontSize: '0.78rem', color: 'var(--nadeshiko-dark)', fontWeight: 700 }}>🏆 FINAL EXAM (30 ITEMS)</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
                    Comprehensive Mastery Exam: The Human Body
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--hai-slate)', marginTop: '4px' }}>
                    Diverse exam methods: MCQs, Diagram Fill-in, Enumeration, Socratic, and Clinical Essays.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--shironeri-silk)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--hai-border)' }}>
                <div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--sumi-ink)' }}>
                    Ready to Dispatch: {dispatchPart === 'final' ? '30-Item Final Exam' : `Part ${dispatchPart} Quiz (10 Items)`}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--hai-slate)' }}>
                    Will pop up on Kate's phone/screen in real-time until completed
                  </div>
                </div>

                <button
                  className="btn-primary"
                  onClick={() => handleDispatchHumanBodyQuiz(dispatchPart)}
                  style={{ padding: '0.6rem 1.4rem' }}
                >
                  <Sparkles size={14} />
                  <span>Lock & Dispatch to Kate</span>
                </button>
              </div>
            </div>
          )}

          {/* Lab Safety Dispatcher */}
          {dispatchModule === 'lab_safety' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {([10, 15, 20, 25, 50] as QuizTier[]).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setDispatchTier(tier)}
                    style={{
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      background: dispatchTier === tier ? 'var(--sakura-soft)' : 'var(--shironeri-silk)',
                      border: `1px solid ${dispatchTier === tier ? 'var(--nadeshiko-rose)' : 'var(--hai-border)'}`,
                      textAlign: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '1.15rem', fontWeight: 700, color: dispatchTier === tier ? 'var(--nadeshiko-dark)' : 'var(--sumi-ink)' }}>
                      {tier}Q
                    </div>
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--shironeri-silk)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--hai-border)' }}>
                <div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--sumi-ink)' }}>
                    Ready to Dispatch: {dispatchTier} Items Safety Drill
                  </div>
                </div>

                <button
                  className="btn-primary"
                  onClick={() => handleDispatchLabSafetyQuiz(dispatchTier)}
                  style={{ padding: '0.6rem 1.4rem' }}
                >
                  <Sparkles size={14} />
                  <span>Dispatch Safety Quiz</span>
                </button>
              </div>
            </div>
          )}
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
              ✍️ Custom Challenge
            </button>
          </div>

          {isCustomMode ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <input
                type="text"
                placeholder="Checkpoint Title (e.g. Real-Time Anatomy Checkpoint)"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                className="minimal-input"
              />
              <textarea
                placeholder="Type your real-time challenge question for Kate..."
                rows={4}
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                className="minimal-textarea"
              />
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {availableInterruptQuestions.map((q) => {
                const isSelected = selectedQuestion?.id === q.id;
                return (
                  <div
                    key={q.id}
                    onClick={() => setSelectedQuestion(q)}
                    style={{
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'var(--sakura-soft)' : 'var(--gofun-white)',
                      border: `1px solid ${isSelected ? 'var(--nadeshiko-rose)' : 'var(--sakura-border)'}`,
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', color: 'var(--nadeshiko-dark)', fontWeight: 600, marginBottom: '2px' }}>
                      {q.context}
                    </div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--sumi-ink)', fontWeight: 500 }}>
                      {q.prompt}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <button
            className="btn-primary"
            onClick={handleDispatchInterrupt}
            style={{ width: '100%', padding: '0.75rem' }}
          >
            <Send size={15} />
            <span>Send Pop-up to Kate's Screen</span>
          </button>
        </div>
      )}

      {/* 3. ANSWER KEYS & RUBRICS TAB */}
      {activeConsoleTab === 'answer_keys' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <span className="category-tag">Instructor Reference Portal</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
                Complete Course Answer Keys & Diagram Rubrics
              </h2>
            </div>

            {/* Switch question bank */}
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <button
                className={answerKeyModule === 'human_body' ? 'btn-primary' : 'btn-minimal'}
                onClick={() => {
                  setAnswerKeyModule('human_body');
                  setAnswerKeyCategory('All');
                  setInspectedQuestion(HUMAN_BODY_QUESTION_BANK[0]);
                }}
                style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem' }}
              >
                Unit 1: The Human Body ({HUMAN_BODY_QUESTION_BANK.length})
              </button>
              <button
                className={answerKeyModule === 'lab_safety' ? 'btn-primary' : 'btn-minimal'}
                onClick={() => {
                  setAnswerKeyModule('lab_safety');
                  setAnswerKeyCategory('All');
                  setInspectedQuestion(QUESTION_BANK_100[0]);
                }}
                style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem' }}
              >
                Lab Safety Bank ({QUESTION_BANK_100.length})
              </button>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setAnswerKeyCategory(cat)}
                style={{
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-pill)',
                  background: answerKeyCategory === cat ? 'var(--nadeshiko-dark)' : 'var(--shironeri-silk)',
                  color: answerKeyCategory === cat ? '#FFF' : 'var(--sumi-light)',
                  border: '1px solid var(--hai-border)',
                  fontSize: '0.74rem',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 2-Column Inspector Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 1fr) minmax(320px, 1.4fr)', gap: '1rem', minHeight: '380px' }}>
            {/* List */}
            <div style={{ maxHeight: '450px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.4rem', borderRight: '1px solid var(--sakura-border)', paddingRight: '0.5rem' }}>
              {filteredAnswerKeys.map((q, idx) => {
                const isSelected = inspectedQuestion?.id === q.id;
                return (
                  <div
                    key={q.id}
                    onClick={() => setInspectedQuestion(q)}
                    style={{
                      padding: '0.65rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'var(--sakura-soft)' : 'var(--gofun-white)',
                      border: `1px solid ${isSelected ? 'var(--nadeshiko-rose)' : 'var(--sakura-border)'}`,
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--hai-slate)', marginBottom: '2px' }}>
                      <span>Item {idx + 1}</span>
                      <span style={{ textTransform: 'capitalize', color: 'var(--nadeshiko-dark)', fontWeight: 600 }}>{q.type.replace('_', ' ')}</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--sumi-ink)', fontWeight: 500, lineHeight: 1.35 }}>
                      {q.question.length > 70 ? q.question.substring(0, 70) + '...' : q.question}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detail View */}
            {inspectedQuestion && (
              <div style={{ padding: '0.5rem', maxHeight: '450px', overflowY: 'auto' }}>
                <span className="category-tag" style={{ marginBottom: '0.5rem' }}>
                  {inspectedQuestion.category} • {inspectedQuestion.difficulty.toUpperCase()}
                </span>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--sumi-ink)', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                  {inspectedQuestion.question}
                </h4>

                {/* Diagram Preview if applicable */}
                {inspectedQuestion.diagramUrl && (
                  <div style={{ textAlign: 'center', marginBottom: '1rem', background: 'var(--shironeri-silk)', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
                    <img
                      src={inspectedQuestion.diagramUrl}
                      alt="Diagram"
                      style={{ maxHeight: '180px', maxWidth: '100%', objectFit: 'contain' }}
                    />
                    <div style={{ fontSize: '0.72rem', color: 'var(--hai-slate)', marginTop: '4px' }}>
                      {inspectedQuestion.diagramTitle}
                    </div>
                  </div>
                )}

                <div style={{ background: 'rgba(76, 175, 80, 0.08)', border: '1px solid #4CAF50', borderRadius: 'var(--radius-sm)', padding: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2E7D32', marginBottom: '0.2rem' }}>
                    ✓ Official Model Answer / Key:
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--sumi-ink)', lineHeight: 1.45 }}>
                    {inspectedQuestion.modelAnswer}
                  </div>
                </div>

                <div style={{ background: 'var(--sakura-mist)', border: '1px solid var(--sakura-border)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--nadeshiko-dark)', marginBottom: '0.2rem' }}>
                    📋 Grading Rubric Guidelines:
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--sumi-light)', lineHeight: 1.45 }}>
                    {inspectedQuestion.rubricGuide}
                  </div>
                </div>

                <div style={{ background: 'var(--shironeri-silk)', border: '1px solid var(--hai-border)', borderRadius: 'var(--radius-sm)', padding: '0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--hai-slate)', marginBottom: '0.2rem' }}>
                    💡 Socratic Clue for Kate:
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--sumi-ink)', lineHeight: 1.45 }}>
                    {inspectedQuestion.socraticClue}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
