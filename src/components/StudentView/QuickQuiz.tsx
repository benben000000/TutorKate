import React, { useState, useMemo } from 'react';
import { useWebSocket } from '../../context/WebSocketContext';
import { QUESTION_BANK_100 } from '../../data/question_bank_100';
import { ComprehensiveQuizQuestion, QuizTier } from '../../types';
import {
  RotateCcw,
  Award,
  ArrowRight,
  AlertCircle,
  Brain,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuickQuizProps {
  onFinish?: () => void;
}

export const QuickQuiz: React.FC<QuickQuizProps> = () => {
  const { logMistake, triggerAutoSocraticInterrupt, mistakeLog } = useWebSocket();
  const [selectedTier, setSelectedTier] = useState<QuizTier>(10);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [showMistakesBank, setShowMistakesBank] = useState(false);

  // Pick random non-repeating questions for the selected tier from QUESTION_BANK_100
  const activeQuestions = useMemo(() => {
    const mcqQuestions = QUESTION_BANK_100.filter((q) => q.type === 'multiple_choice');
    const shuffled = [...mcqQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(selectedTier, shuffled.length));
  }, [selectedTier, isQuizActive]);

  const currentQ: ComprehensiveQuizQuestion | undefined = activeQuestions[currentIdx];
  const isAnswered = selectedAnswers[currentIdx] !== undefined;
  const isCurrentCorrect = isAnswered && currentQ && selectedAnswers[currentIdx] === currentQ.correctIndex;

  const handleStartQuiz = (tier: QuizTier) => {
    setSelectedTier(tier);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setShowSummary(false);
    setIsQuizActive(true);
  };

  const handleSelectOption = (optIdx: number) => {
    if (isAnswered || !currentQ) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIdx]: optIdx
    }));

    const isCorrect = optIdx === currentQ.correctIndex;
    if (!isCorrect) {
      // Log the mistake to student history
      logMistake(
        currentQ.id,
        currentQ.question,
        currentQ.options ? currentQ.options[optIdx] : optIdx,
        currentQ.socraticClue,
        currentQ.category
      );
    }
  };

  const handleNext = () => {
    if (currentIdx < activeQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowSummary(true);
      try {
        confetti({
          particleCount: 75,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#F8C3CD', '#E87A90', '#F19483']
        });
      } catch (e) {}
    }
  };

  const handleRestart = () => {
    setIsQuizActive(false);
    setShowSummary(false);
    setSelectedAnswers({});
    setCurrentIdx(0);
  };

  const calculateScore = () => {
    let score = 0;
    activeQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  // 1. TIER SELECTION SCREEN
  if (!isQuizActive) {
    const tierOptions: { tier: QuizTier; title: string; subtitle: string; desc: string; icon: string; color: string }[] = [
      { tier: 10, title: 'Level 1: Quick Recall', subtitle: '10 Items', desc: 'Foundational safety rules & hazard recognition', icon: '🌱', color: '#4CAF50' },
      { tier: 15, title: 'Level 2: Deep Drill', subtitle: '15 Items', desc: 'PPE materials, glove selection & doffing order', icon: '🌿', color: '#2196F3' },
      { tier: 20, title: 'Level 3: Clinical Scenarios', subtitle: '20 Items', desc: 'Chemical spills, eyewash & emergency response', icon: '🌸', color: '#E87A90' },
      { tier: 25, title: 'Level 4: Mastery Sprint', subtitle: '25 Items', desc: 'Inspection checklists & stockroom governance', icon: '⚡', color: '#FF9800' },
      { tier: 50, title: 'Level 5: Practical Exam', subtitle: '50 Items', desc: 'Comprehensive Week 1 Laboratory Examination', icon: '🏆', color: '#9C27B0' }
    ];

    return (
      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '1.25rem 1rem' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div>
            <span className="category-tag">Adaptive Mastery Engine</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
              ANPH111 Safety Quizzes
            </h2>
          </div>

          <button
            className="btn-minimal"
            onClick={() => setShowMistakesBank(!showMistakesBank)}
            style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
          >
            <AlertCircle size={13} color="var(--nadeshiko-rose)" />
            <span>Mistakes ({mistakeLog.length})</span>
          </button>
        </div>

        {/* Mistake Bank Dropdown / Banner if any mistakes logged */}
        {showMistakesBank && (
          <div className="editorial-card" style={{ marginBottom: '1.25rem', background: 'var(--sakura-mist)', border: '1px solid var(--sakura-border-hover)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, fontSize: '0.88rem', color: 'var(--nadeshiko-dark)' }}>
                <Brain size={16} />
                <span>Kate's Weak Spots & Review Queue</span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--hai-slate)' }}>{mistakeLog.length} Logged</span>
            </div>

            {mistakeLog.length === 0 ? (
              <div style={{ fontSize: '0.8rem', color: 'var(--hai-slate)', textAlign: 'center', padding: '1rem 0' }}>
                No mistakes logged yet! Great job, Katelyn.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxHeight: '240px', overflowY: 'auto' }}>
                {mistakeLog.slice(0, 5).map((m) => (
                  <div key={m.id} style={{ background: '#FFFFFF', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--sakura-border)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--nadeshiko-dark)', fontWeight: 600, marginBottom: '0.2rem' }}>
                      {m.category}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--sumi-ink)', marginBottom: '0.4rem' }}>
                      {m.question}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--hai-slate)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                      💡 Clue: {m.socraticClue}
                    </div>
                    <button
                      className="btn-subtle"
                      onClick={() => triggerAutoSocraticInterrupt(m)}
                      style={{ fontSize: '0.72rem', padding: '0.25rem 0.5rem', width: '100%', justifyContent: 'center' }}
                    >
                      <Zap size={12} style={{ marginRight: '4px' }} />
                      Challenge Me on This Concept
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tier Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {tierOptions.map((opt) => (
            <button
              key={opt.tier}
              onClick={() => handleStartQuiz(opt.tier)}
              className="editorial-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.1rem 1.25rem',
                textAlign: 'left',
                cursor: 'pointer',
                background: 'var(--gofun-white)',
                border: '1px solid var(--sakura-border)',
                transition: 'all 0.2s ease',
                width: '100%'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ fontSize: '1.5rem' }}>{opt.icon}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--sumi-ink)' }}>{opt.title}</span>
                    <span style={{ fontSize: '0.72rem', background: 'var(--sakura-soft)', color: 'var(--nadeshiko-dark)', padding: '0.15rem 0.45rem', borderRadius: 'var(--radius-pill)', fontWeight: 600 }}>
                      {opt.subtitle}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--hai-slate)', marginTop: '2px' }}>
                    {opt.desc}
                  </div>
                </div>
              </div>
              <ArrowRight size={16} color="var(--nadeshiko-rose)" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2. RESULTS SUMMARY SCREEN
  if (showSummary) {
    const score = calculateScore();
    const percent = Math.round((score / activeQuestions.length) * 100);

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1.5rem 1rem' }}>
        <div className="editorial-card" style={{ textAlign: 'center', padding: '2rem 1.25rem' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'var(--sakura-soft)',
              border: '1px solid var(--sakura-border-hover)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
              color: 'var(--nadeshiko-dark)'
            }}
          >
            <Award size={30} />
          </div>

          <span className="category-tag">Assessment Finished</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '0.3rem' }}>
            {percent >= 80 ? 'Mastery Achieved, Katelyn!' : 'Good Effort, Katelyn!'}
          </h2>
          <p style={{ fontSize: '0.86rem', color: 'var(--hai-slate)', marginTop: '0.3rem', marginBottom: '1.5rem' }}>
            You answered {score} out of {activeQuestions.length} ({percent}%).
          </p>

          <div
            style={{
              background: 'var(--shironeri-silk)',
              border: '1px solid var(--sakura-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--hai-slate)', textTransform: 'uppercase' }}>Correct</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#2E7D32' }}>{score}</div>
            </div>
            <div style={{ width: '1px', height: '30px', background: 'var(--sakura-border)' }} />
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--hai-slate)', textTransform: 'uppercase' }}>Accuracy</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--nadeshiko-dark)' }}>{percent}%</div>
            </div>
            <div style={{ width: '1px', height: '30px', background: 'var(--sakura-border)' }} />
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--hai-slate)', textTransform: 'uppercase' }}>Tier</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--sumi-ink)' }}>{selectedTier}Q</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <button className="btn-primary" onClick={handleRestart} style={{ width: '100%', justifyContent: 'center' }}>
              <RotateCcw size={15} />
              <span>Choose Another Quiz Tier</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. ACTIVE QUIZ QUESTION SCREEN
  if (!currentQ) return null;

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '1.25rem 1rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <span className="category-tag">
            Question {currentIdx + 1} of {activeQuestions.length} • {selectedTier} Items Tier
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
            {currentQ.category}
          </h2>
        </div>

        {/* Mini Stepper Dots */}
        <div style={{ display: 'flex', gap: '3px' }}>
          {activeQuestions.map((_, i) => (
            <div
              key={i}
              style={{
                width: '10px',
                height: '4px',
                borderRadius: '2px',
                background:
                  i === currentIdx
                    ? 'var(--nadeshiko-rose)'
                    : selectedAnswers[i] !== undefined
                    ? 'var(--sakura-blush)'
                    : 'var(--hai-border)',
                transition: 'all 0.2s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* Question Card */}
      <div className="editorial-card" style={{ padding: '1.35rem' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--sumi-ink)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
          {currentQ.question}
        </h3>

        {/* Options (Socratic Mode: NEVER shows green answer when wrong!) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.25rem' }}>
          {currentQ.options?.map((opt, optIdx) => {
            const isSelected = selectedAnswers[currentIdx] === optIdx;
            let bgColor = 'var(--gofun-white)';
            let borderColor = 'var(--sakura-border)';
            let textColor = 'var(--sumi-ink)';

            if (isAnswered) {
              if (isSelected) {
                if (isCurrentCorrect) {
                  // Correct selection: Green
                  bgColor = 'rgba(76, 175, 80, 0.08)';
                  borderColor = 'rgba(76, 175, 80, 0.35)';
                  textColor = '#1B5E20';
                } else {
                  // Incorrect selection: Rose highlight (without revealing the actual correct answer!)
                  bgColor = 'rgba(232, 122, 144, 0.12)';
                  borderColor = 'var(--nadeshiko-rose)';
                  textColor = 'var(--nadeshiko-dark)';
                }
              }
            } else if (isSelected) {
              bgColor = 'var(--sakura-soft)';
              borderColor = 'var(--sakura-border-hover)';
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(optIdx)}
                disabled={isAnswered}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: bgColor,
                  border: `1px solid ${borderColor}`,
                  textAlign: 'left',
                  cursor: isAnswered ? 'default' : 'pointer',
                  fontSize: '0.88rem',
                  color: textColor,
                  transition: 'all 0.2s ease',
                  width: '100%',
                  minHeight: '52px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: isSelected ? 'var(--nadeshiko-rose)' : 'var(--shironeri-silk)',
                      color: isSelected ? '#FFFFFF' : 'var(--sumi-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      flexShrink: 0
                    }}
                  >
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span style={{ lineHeight: 1.4 }}>{opt}</span>
                </div>

                {isAnswered && isSelected && isCurrentCorrect && <CheckCircle2 size={18} color="#2E7D32" style={{ flexShrink: 0, marginLeft: '6px' }} />}
                {isAnswered && isSelected && !isCurrentCorrect && <XCircle size={18} color="var(--nadeshiko-rose)" style={{ flexShrink: 0, marginLeft: '6px' }} />}
              </button>
            );
          })}
        </div>

        {/* Socratic Clue Card (Shown when wrong WITHOUT revealing the direct answer!) */}
        {isAnswered && !isCurrentCorrect && (
          <div
            style={{
              background: 'var(--sakura-mist)',
              border: '1px solid var(--sakura-border-hover)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.9rem 1rem',
              marginBottom: '1.25rem',
              fontSize: '0.84rem',
              color: 'var(--sumi-ink)',
              lineHeight: 1.55
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, color: 'var(--nadeshiko-dark)', marginBottom: '0.3rem' }}>
              <HelpCircle size={15} />
              <span>Socratic Clue (Answer not spoiled):</span>
            </div>
            {currentQ.socraticClue}
          </div>
        )}

        {/* Correct Reinforcement Note */}
        {isAnswered && isCurrentCorrect && (
          <div
            style={{
              background: 'rgba(76, 175, 80, 0.06)',
              border: '1px solid rgba(76, 175, 80, 0.25)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.75rem 1rem',
              marginBottom: '1.25rem',
              fontSize: '0.84rem',
              color: '#1B5E20',
              lineHeight: 1.5
            }}
          >
            <span style={{ fontWeight: 600 }}>✓ Correct Reasoning! </span>
            {currentQ.socraticClue}
          </div>
        )}

        {/* Advance Button */}
        {isAnswered && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn-primary" onClick={handleNext} style={{ width: '100%', justifyContent: 'center' }}>
              <span>{currentIdx < activeQuestions.length - 1 ? 'Next Question' : 'View Summary'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
