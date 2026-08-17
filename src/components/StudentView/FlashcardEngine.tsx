import React, { useState, useMemo } from 'react';
import { FLASHCARDS_50 } from '../../data/flashcards_50';
import { Flashcard } from '../../types';
import { RotateCw, ArrowLeft, ArrowRight, Check, Shuffle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FlashcardEngine: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Record<string, boolean>>({});
  const [cardsOrder, setCardsOrder] = useState<Flashcard[]>(FLASHCARDS_50);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(FLASHCARDS_50.map((c) => c.category)));
    return ['All', ...cats];
  }, []);

  const filteredCards = useMemo(() => {
    if (selectedCategory === 'All') return cardsOrder;
    return cardsOrder.filter((c) => c.category === selectedCategory);
  }, [selectedCategory, cardsOrder]);

  const currentCard: Flashcard | undefined = filteredCards[currentIndex % filteredCards.length];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCardsOrder([...cardsOrder].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  const toggleMastered = () => {
    if (!currentCard) return;
    const nextMastered = !masteredIds[currentCard.id];
    setMasteredIds((prev) => ({
      ...prev,
      [currentCard.id]: nextMastered
    }));

    if (nextMastered) {
      try {
        confetti({
          particleCount: 35,
          spread: 55,
          origin: { y: 0.65 },
          colors: ['#F8C3CD', '#E87A90', '#F19483']
        });
      } catch (e) {}
    }
  };

  const masteredCount = Object.values(masteredIds).filter(Boolean).length;
  const progressPercent = Math.round((masteredCount / FLASHCARDS_50.length) * 100);

  if (!currentCard) return null;

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', padding: '1.25rem 1rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
        <div>
          <span className="category-tag">Unlimited Active Recall</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--sumi-ink)', marginTop: '2px' }}>
            Laboratory Safety Deck ({FLASHCARDS_50.length})
          </h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button className="btn-minimal" onClick={handleShuffle} title="Shuffle Deck" style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}>
            <Shuffle size={13} />
            <span>Shuffle</span>
          </button>
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--nadeshiko-dark)',
              background: 'var(--sakura-soft)',
              padding: '0.35rem 0.65rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--sakura-border)',
              fontWeight: 600
            }}
          >
            {masteredCount}/{FLASHCARDS_50.length}
          </div>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="section-chips-scroller" style={{ marginBottom: '0.85rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`section-chip-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
          >
            <span>{cat}</span>
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div style={{ width: '100%', height: '4px', background: 'var(--sakura-soft)', borderRadius: '2px', overflow: 'hidden', marginBottom: '1.25rem' }}>
        <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--nadeshiko-rose)', transition: 'width 0.3s ease' }} />
      </div>

      {/* Main Flashcard View with 3D Flip */}
      <div
        className="flashcard-3d-scene"
        onClick={handleFlip}
        style={{
          cursor: 'pointer',
          marginBottom: '1.25rem',
          minHeight: '340px'
        }}
      >
        <div className={`flashcard-3d-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Front Face (Question) */}
          <div className="flashcard-face">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="category-tag">{currentCard.category}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--hai-slate)' }}>
                {(currentIndex % filteredCards.length) + 1} of {filteredCards.length}
              </span>
            </div>

            <div style={{ textAlign: 'center', margin: 'auto 0', padding: '1rem 0' }}>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.18rem',
                  fontWeight: 600,
                  color: 'var(--sumi-ink)',
                  lineHeight: 1.6
                }}
              >
                {currentCard.front}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--hai-slate)' }}>
              <RotateCw size={12} />
              <span>Tap to flip and reveal answer</span>
            </div>
          </div>

          {/* Back Face (Answer) */}
          <div className="flashcard-face back">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="category-tag" style={{ color: 'var(--nadeshiko-dark)' }}>Answer & Key Rule</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--hai-slate)' }}>
                {(currentIndex % filteredCards.length) + 1} of {filteredCards.length}
              </span>
            </div>

            <div style={{ textAlign: 'center', margin: 'auto 0', padding: '0.75rem 0' }}>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.02rem',
                  fontWeight: 500,
                  color: 'var(--sumi-ink)',
                  lineHeight: 1.65,
                  whiteSpace: 'pre-line'
                }}
              >
                {currentCard.back}
              </div>

              {currentCard.keyRule && (
                <div style={{ marginTop: '0.75rem', fontSize: '0.78rem', color: 'var(--nadeshiko-dark)', fontWeight: 600 }}>
                  🔑 {currentCard.keyRule}
                </div>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--nadeshiko-dark)' }}>
              <RotateCw size={12} />
              <span>Tap to flip back</span>
            </div>
          </div>
        </div>
      </div>

      {/* Thumb-Friendly Action Controls */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr', gap: '0.5rem', alignItems: 'center' }}>
        <button className="btn-minimal" onClick={handlePrev} style={{ justifyContent: 'center' }}>
          <ArrowLeft size={14} />
          <span>Prev</span>
        </button>

        <button
          className={masteredIds[currentCard.id] ? 'btn-primary' : 'btn-minimal'}
          onClick={toggleMastered}
          style={{ justifyContent: 'center', padding: '0.6rem 0.5rem' }}
        >
          <Check size={14} />
          <span>{masteredIds[currentCard.id] ? 'Mastered ✓' : 'Mark Mastered'}</span>
        </button>

        <button className="btn-minimal" onClick={handleNext} style={{ justifyContent: 'center' }}>
          <span>Next</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
