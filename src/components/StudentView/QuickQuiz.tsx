import React, { useState, useMemo } from 'react';
import { useWebSocket } from '../../context/WebSocketContext';
import { QUESTION_BANK_100 } from '../../data/question_bank_100';
import { HUMAN_BODY_QUESTION_BANK } from '../../data/question_bank_human_body';
import { ComprehensiveQuizQuestion, QuizTier } from '../../types';
import {
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Brain,
  HelpCircle,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuickQuizProps {
  onFinish?: () => void;
}

type QuizMode = 'hb_part1' | 'hb_part2' | 'hb_part3' | 'hb_final' | 'lab_safety';

export const QuickQuiz: React.FC<QuickQuizProps> = () => {
  const { logMistake, triggerAutoSocraticInterrupt, mistakeLog } = useWebSocket();
  const [selectedMode, setSelectedMode] = useState<QuizMode>('hb_part1');
  const [selectedTier, setSelectedTier] = useState<QuizTier>(10);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [showMistakesBank, setShowMistakesBank] = useState(false);
  const [showModelAnswer, setShowModelAnswer] = useState<Record<string, boolean>>({});

  // Active question set based on selected quiz mode
  const activeQuestions = useMemo(() => {
    if (selectedMode === 'hb_part1') {
      return HUMAN_BODY_QUESTION_BANK.filter((q) => q.partNumber === 1);
    }
    if (selectedMode === 'hb_part2') {
      return HUMAN_BODY_QUESTION_BANK.filter((q) => q.partNumber === 2);
    }
    if (selectedMode === 'hb_part3') {
      return HUMAN_BODY_QUESTION_BANK.filter((q) => q.partNumber === 3);
    }
    if (selectedMode === 'hb_final') {
      return HUMAN_BODY_QUESTION_BANK.filter((q) => q.partNumber === 'final');
    }
    // Default fallback: Lab safety question bank
    const mcqQuestions = QUESTION_BANK_100.filter((q) => q.type === 'multiple_choice');
    const shuffled = [...mcqQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(selectedTier, shuffled.length));
  }, [selectedMode, selectedTier, isQuizActive]);

  const currentQ: ComprehensiveQuizQuestion | undefined = activeQuestions[currentIdx];

  const handleStartQuiz = (mode: QuizMode, tier: QuizTier = 10) => {
    setSelectedMode(mode);
    setSelectedTier(tier);
    setCurrentIdx(0);
    setAnswers({});
    setShowSummary(false);
    setShowModelAnswer({});
    setIsQuizActive(true);
  };

  const handleSelectMCQ = (optIdx: number) => {
    if (!currentQ || answers[currentQ.id] !== undefined) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optIdx
    }));

    const isCorrect = optIdx === currentQ.correctIndex;
    if (!isCorrect) {
      logMistake(
        currentQ.id,
        currentQ.question,
        currentQ.options ? currentQ.options[optIdx] : optIdx,
        currentQ.socraticClue,
        currentQ.category
      );
    }
  };

  const handleDiagramLabelSelect = (labelId: string, value: string) => {
    if (!currentQ) return;
    const prevLabels = (answers[currentQ.id] as Record<string, string>) || {};
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prevLabels,
        [labelId]: value
      }
    }));
  };

  const handleEnumerationChange = (itemIdx: number, val: string) => {
    if (!currentQ) return;
    const prevItems = (answers[currentQ.id] as string[]) || [];
    const nextItems = [...prevItems];
    nextItems[itemIdx] = val;
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: nextItems
    }));
  };

  const handleEssayChange = (val: string) => {
    if (!currentQ) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: val
    }));
  };

  const handleNext = () => {
    if (currentIdx < activeQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowSummary(true);
      try {
        confetti({
          particleCount: 85,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#F8C3CD', '#E87A90', '#F19483']
        });
      } catch (e) {}
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleRestart = () => {
    setIsQuizActive(false);
    setShowSummary(false);
    setAnswers({});
    setCurrentIdx(0);
    setShowModelAnswer({});
  };

  const calculateScore = () => {
    let score = 0;
    activeQuestions.forEach((q) => {
      const userAns = answers[q.id];
      if (q.type === 'multiple_choice' && userAns === q.correctIndex) {
        score += 1;
      } else if (q.type === 'diagram_label' && q.diagramLabels && userAns) {
        let allCorrect = true;
        q.diagramLabels.forEach((dl) => {
          if (userAns[dl.id] !== dl.correctAnswer) allCorrect = false;
        });
        if (allCorrect) score += 1;
      } else if (q.type === 'enumeration' && Array.isArray(userAns)) {
        if (userAns.filter((i) => i && i.trim().length > 0).length >= (q.enumerationCount || 3)) {
          score += 1;
        }
      } else if ((q.type === 'essay' || q.type === 'socratic') && typeof userAns === 'string' && userAns.trim().length > 15) {
        score += 1;
      }
    });
    return score;
  };

  // 1. QUIZ SELECTOR SCREEN
  if (!isQuizActive) {
    return (
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '1.25rem 1rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <span className="category-tag">Official Course Mastery Assessment</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
              ANPH 111 Knowledge Check & Exams
            </h2>
          </div>

          <button
            className="btn-minimal"
            onClick={() => setShowMistakesBank(!showMistakesBank)}
            style={{ fontSize: '0.75rem', padding: '0.4rem 0.75rem' }}
          >
            <AlertCircle size={14} color="var(--nadeshiko-rose)" />
            <span>Mistakes ({mistakeLog.length})</span>
          </button>
        </div>

        {/* Mistakes Review Drawer */}
        {showMistakesBank && (
          <div className="editorial-card" style={{ marginBottom: '1.5rem', background: 'var(--sakura-mist)', border: '1px solid var(--sakura-border-hover)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--nadeshiko-dark)' }}>
                <Brain size={16} />
                <span>Katelyn's Remediation Bank</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--hai-slate)' }}>{mistakeLog.length} Recorded</span>
            </div>

            {mistakeLog.length === 0 ? (
              <div style={{ fontSize: '0.82rem', color: 'var(--hai-slate)', textAlign: 'center', padding: '1rem 0' }}>
                🌸 Zero mistakes logged. Outstanding mastery, Katelyn!
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', maxHeight: '240px', overflowY: 'auto' }}>
                {mistakeLog.map((m) => (
                  <div
                    key={m.id}
                    style={{
                      background: 'var(--gofun-white)',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--sakura-border)'
                    }}
                  >
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--sumi-ink)', marginBottom: '0.2rem' }}>
                      {m.question}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--nadeshiko-dark)', fontStyle: 'italic', marginBottom: '0.4rem' }}>
                      💡 Socratic Clue: {m.socraticClue}
                    </div>
                    <button
                      className="btn-minimal"
                      onClick={() => triggerAutoSocraticInterrupt(m)}
                      style={{ fontSize: '0.7rem', padding: '0.25rem 0.5rem', color: 'var(--nadeshiko-rose)' }}
                    >
                      <Zap size={11} />
                      <span>Request Socratic Checkpoint</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Section 1: Week 1 Course Unit 1: The Human Body (PRIMARY LECTURE LESSON) */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span style={{ fontSize: '1.1rem' }}>📖</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--sumi-ink)' }}>
              Unit 1: The Human Body (Lecture Quizzes & Final Exam)
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {/* Part 1 Quiz */}
            <div
              className="editorial-card"
              style={{
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                border: '1px solid var(--sakura-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onClick={() => handleStartQuiz('hb_part1')}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="category-tag" style={{ color: '#4CAF50' }}>Part 1 Quiz</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--hai-slate)' }}>10 Items</span>
                </div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--sumi-ink)', marginBottom: '0.35rem' }}>
                  Foundations, 6 Levels & 11 Organ Systems
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--hai-slate)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Anatomy/Physiology scopes, chemical-to-organism hierarchy diagrams, 4 tissue types, 11 organ systems & 6 life characteristics.
                </p>
              </div>
              <button className="btn-primary" style={{ width: '100%', fontSize: '0.82rem', padding: '0.55rem' }}>
                Start Part 1 Quiz →
              </button>
            </div>

            {/* Part 2 Quiz */}
            <div
              className="editorial-card"
              style={{
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                border: '1px solid var(--sakura-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onClick={() => handleStartQuiz('hb_part2')}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="category-tag" style={{ color: '#2196F3' }}>Part 2 Quiz</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--hai-slate)' }}>10 Items</span>
                </div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--sumi-ink)', marginBottom: '0.35rem' }}>
                  Homeostasis, Feedback & Directional Terms
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--hai-slate)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Set points, negative/positive feedback mechanisms, anatomical position, prone/supine stances & paired directional diagrams.
                </p>
              </div>
              <button className="btn-primary" style={{ width: '100%', fontSize: '0.82rem', padding: '0.55rem' }}>
                Start Part 2 Quiz →
              </button>
            </div>

            {/* Part 3 Quiz */}
            <div
              className="editorial-card"
              style={{
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                border: '1px solid var(--sakura-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onClick={() => handleStartQuiz('hb_part3')}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="category-tag" style={{ color: '#9C27B0' }}>Part 3 Quiz</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--hai-slate)' }}>10 Items</span>
                </div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--sumi-ink)', marginBottom: '0.35rem' }}>
                  Body Regions, Quadrants, Planes & Cavities
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--hai-slate)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Anterior/posterior regions, 4 quadrants, 9 abdominal regions, body planes, organ sections & serous membranes.
                </p>
              </div>
              <button className="btn-primary" style={{ width: '100%', fontSize: '0.82rem', padding: '0.55rem' }}>
                Start Part 3 Quiz →
              </button>
            </div>

            {/* 30-Item Final Comprehensive Exam */}
            <div
              className="editorial-card"
              style={{
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                border: '2px solid var(--nadeshiko-rose)',
                background: 'linear-gradient(145deg, #FFF9FA 0%, #FFF 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gridColumn: '1 / -1'
              }}
              onClick={() => handleStartQuiz('hb_final')}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="category-tag" style={{ background: 'var(--nadeshiko-rose)', color: '#FFF' }}>
                    🏆 Final Comprehensive Exam
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--nadeshiko-dark)' }}>
                    30 Diverse Items
                  </span>
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--sumi-ink)', marginBottom: '0.4rem' }}>
                  Week 1 Mastery Exam: The Human Body
                </h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--sumi-light)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Multi-method official examination featuring Multiple Choice, Fill-the-Diagram, Enumeration, Socratic Reasoning, and Clinical Essays covering all Unit 1 topics.
                </p>
              </div>
              <button className="btn-primary" style={{ width: '100%', fontSize: '0.92rem', padding: '0.75rem' }}>
                Begin 30-Item Final Examination →
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Laboratory Safety Practice Bank */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <span style={{ fontSize: '1.1rem' }}>🔬</span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--sumi-ink)' }}>
              Week 1 Laboratory: Safety & Protocols Practice Bank
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {[
              { tier: 10 as QuizTier, label: '10 Items (Safety Drill)' },
              { tier: 15 as QuizTier, label: '15 Items (PPE Drill)' },
              { tier: 20 as QuizTier, label: '20 Items (Emergency Protocols)' },
              { tier: 50 as QuizTier, label: '50 Items (Full Lab Exam)' }
            ].map((t) => (
              <button
                key={t.tier}
                className="btn-minimal"
                onClick={() => handleStartQuiz('lab_safety', t.tier)}
                style={{
                  padding: '0.85rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'var(--gofun-white)',
                  border: '1px solid var(--sakura-border)'
                }}
              >
                <span style={{ fontWeight: 600, fontSize: '0.84rem' }}>{t.label}</span>
                <ArrowRight size={14} color="var(--nadeshiko-rose)" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. ACTIVE QUIZ RUNNER
  if (!currentQ) {
    return <div>Loading quiz...</div>;
  }

  const isCurrentAnswered = answers[currentQ.id] !== undefined;

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '1rem' }}>
      {/* Top Meta Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <button
          className="btn-minimal"
          onClick={handleRestart}
          style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem' }}
        >
          <RotateCcw size={13} />
          <span>Exit Exam</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="category-tag">
            Item {currentIdx + 1} of {activeQuestions.length}
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
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container" style={{ marginBottom: '1.25rem', height: '6px' }}>
        <div
          className="progress-bar-fill"
          style={{ width: `${((currentIdx + 1) / activeQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="editorial-card" style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '0.78rem', color: 'var(--hai-slate)', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          {currentQ.category}
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--sumi-ink)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
          {currentQ.question}
        </h3>

        {/* ─── A. MULTIPLE CHOICE QUESTION ─── */}
        {currentQ.type === 'multiple_choice' && currentQ.options && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = answers[currentQ.id] === optIdx;
              const isCorrect = optIdx === currentQ.correctIndex;
              let bg = 'var(--gofun-white)';
              let border = 'var(--sakura-border)';
              let textColor = 'var(--sumi-ink)';

              if (isCurrentAnswered) {
                if (isCorrect) {
                  bg = 'rgba(76, 175, 80, 0.08)';
                  border = '#4CAF50';
                  textColor = '#2E7D32';
                } else if (isSelected) {
                  bg = 'rgba(232, 122, 144, 0.12)';
                  border = 'var(--nadeshiko-rose)';
                  textColor = 'var(--nadeshiko-dark)';
                }
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectMCQ(optIdx)}
                  disabled={isCurrentAnswered}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: bg,
                    border: `1px solid ${border}`,
                    textAlign: 'left',
                    cursor: isCurrentAnswered ? 'default' : 'pointer',
                    fontSize: '0.88rem',
                    color: textColor,
                    transition: 'all 0.2s ease',
                    width: '100%',
                    minHeight: '48px'
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isSelected ? 'var(--nadeshiko-rose)' : 'var(--shironeri-silk)',
                      color: isSelected ? '#FFF' : 'var(--sumi-light)',
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

        {/* ─── B. DIAGRAM LABELING QUESTION ─── */}
        {currentQ.type === 'diagram_label' && currentQ.diagramUrl && currentQ.diagramLabels && (
          <div>
            <div
              style={{
                textAlign: 'center',
                background: 'var(--shironeri-silk)',
                border: '1px solid var(--sakura-border)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem',
                marginBottom: '1.25rem'
              }}
            >
              <img
                src={currentQ.diagramUrl}
                alt={currentQ.diagramTitle || 'Anatomical Diagram'}
                style={{
                  maxWidth: '100%',
                  maxHeight: '380px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'block',
                  margin: '0 auto',
                  objectFit: 'contain'
                }}
              />
              {currentQ.diagramTitle && (
                <div style={{ fontSize: '0.78rem', color: 'var(--hai-slate)', fontStyle: 'italic', marginTop: '0.5rem' }}>
                  {currentQ.diagramTitle}
                </div>
              )}
            </div>

            <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--sumi-ink)', marginBottom: '0.65rem' }}>
              Select the corresponding anatomical label for each pointer:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {currentQ.diagramLabels.map((dl) => {
                const currentVal = (answers[currentQ.id] as Record<string, string>)?.[dl.id] || '';
                const isCorrect = currentVal === dl.correctAnswer;

                return (
                  <div
                    key={dl.id}
                    style={{
                      background: 'var(--gofun-white)',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--sakura-border)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--nadeshiko-dark)' }}>
                        Pointer {dl.labelNumber}: {dl.targetName}
                      </span>
                      {currentVal && (
                        <span style={{ fontSize: '0.75rem', color: isCorrect ? '#2E7D32' : '#C2185B', fontWeight: 600 }}>
                          {isCorrect ? '✓ Correct' : '✗ Review'}
                        </span>
                      )}
                    </div>

                    {dl.options ? (
                      <select
                        value={currentVal}
                        onChange={(e) => handleDiagramLabelSelect(dl.id, e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.55rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--hai-border)',
                          background: 'var(--shironeri-silk)',
                          fontSize: '0.85rem',
                          color: 'var(--sumi-ink)',
                          outline: 'none'
                        }}
                      >
                        <option value="">-- Choose matching label --</option>
                        {dl.options.map((opt, oIdx) => (
                          <option key={oIdx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        placeholder="Type anatomical label name..."
                        value={currentVal}
                        onChange={(e) => handleDiagramLabelSelect(dl.id, e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.55rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--hai-border)',
                          fontSize: '0.85rem',
                          color: 'var(--sumi-ink)'
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── C. ENUMERATION QUESTION ─── */}
        {currentQ.type === 'enumeration' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--hai-slate)', marginBottom: '0.25rem' }}>
              List {currentQ.enumerationCount || 4} distinct items:
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
                    placeholder={`Item ${itemIdx + 1}...`}
                    value={currentItems[itemIdx] || ''}
                    onChange={(e) => handleEnumerationChange(itemIdx, e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--hai-border)',
                      fontSize: '0.88rem',
                      background: 'var(--gofun-white)',
                      color: 'var(--sumi-ink)'
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* ─── D. ESSAY / SOCRATIC QUESTION ─── */}
        {(currentQ.type === 'essay' || currentQ.type === 'socratic') && (
          <div>
            <textarea
              placeholder="Type your comprehensive anatomical/physiological explanation here..."
              rows={5}
              value={(answers[currentQ.id] as string) || ''}
              onChange={(e) => handleEssayChange(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--hai-border)',
                fontSize: '0.88rem',
                background: 'var(--gofun-white)',
                color: 'var(--sumi-ink)',
                lineHeight: 1.6,
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
            />

            {/* Rubric Guide Preview */}
            <div style={{ marginTop: '0.75rem', padding: '0.65rem 0.85rem', background: 'var(--sakura-mist)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--sakura-border)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--nadeshiko-dark)', marginBottom: '0.2rem' }}>
                📋 Evaluation Rubric Guidelines:
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--sumi-light)', lineHeight: 1.4 }}>
                {currentQ.rubricGuide}
              </div>
            </div>
          </div>
        )}

        {/* Instant Socratic Clue Reveal for incorrect answers */}
        {isCurrentAnswered && currentQ.type === 'multiple_choice' && answers[currentQ.id] !== currentQ.correctIndex && (
          <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', background: 'var(--sakura-mist)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--sakura-border)' }}>
            <div style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--nadeshiko-dark)', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <HelpCircle size={13} />
              <span>Pedagogical Socratic Reflection:</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--sumi-ink)', lineHeight: 1.5 }}>
              {currentQ.socraticClue}
            </div>
          </div>
        )}

        {/* Model Answer Toggle for Study Mode */}
        {isCurrentAnswered && (
          <div style={{ marginTop: '0.85rem', textAlign: 'right' }}>
            <button
              className="btn-minimal"
              onClick={() => setShowModelAnswer((prev) => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
              style={{ fontSize: '0.74rem', padding: '0.25rem 0.5rem' }}
            >
              {showModelAnswer[currentQ.id] ? 'Hide Answer Key' : 'Reveal Official Answer Key & Explanation'}
            </button>

            {showModelAnswer[currentQ.id] && (
              <div style={{ marginTop: '0.5rem', textAlign: 'left', padding: '0.75rem', background: 'var(--shironeri-silk)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--hai-border)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#2E7D32', marginBottom: '0.2rem' }}>
                  Official Model Answer:
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--sumi-ink)', lineHeight: 1.5 }}>
                  {currentQ.modelAnswer}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          className="btn-minimal"
          onClick={handlePrev}
          disabled={currentIdx === 0}
          style={{ opacity: currentIdx === 0 ? 0.4 : 1 }}
        >
          <ArrowLeft size={15} />
          <span>Previous Item</span>
        </button>

        <button
          className="btn-primary"
          onClick={handleNext}
          style={{ padding: '0.65rem 1.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <span>{currentIdx < activeQuestions.length - 1 ? 'Next Question' : 'Complete & Submit Exam'}</span>
          <ArrowRight size={15} />
        </button>
      </div>

      {/* 3. SUMMARY MODAL */}
      {showSummary && (
        <div
          className="interrupt-backdrop"
          style={{ zIndex: 1100, background: 'rgba(45, 41, 38, 0.7)' }}
        >
          <div
            className="interrupt-modal"
            style={{ maxWidth: '520px', width: '100%', padding: '2rem', textAlign: 'center' }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--sakura-soft)',
                color: 'var(--nadeshiko-rose)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                fontSize: '1.75rem'
              }}
            >
              🌸
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 600, color: 'var(--sumi-ink)', marginBottom: '0.4rem' }}>
              Examination Completed!
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--hai-slate)', marginBottom: '1.5rem' }}>
              Excellent effort, Katelyn! Here is your performance summary for this assessment:
            </p>

            <div
              style={{
                background: 'var(--shironeri-silk)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--sakura-border)',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--nadeshiko-dark)', fontFamily: 'var(--font-serif)' }}>
                {calculateScore()} / {activeQuestions.length}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--hai-slate)', marginTop: '0.25rem' }}>
                Mastery Score: {Math.round((calculateScore() / activeQuestions.length) * 100)}%
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                className="btn-minimal"
                onClick={handleRestart}
                style={{ flex: 1, padding: '0.75rem' }}
              >
                Back to Exam Menu
              </button>
              <button
                className="btn-primary"
                onClick={() => {
                  setShowSummary(false);
                  setCurrentIdx(0);
                }}
                style={{ flex: 1, padding: '0.75rem' }}
              >
                Review Items
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
