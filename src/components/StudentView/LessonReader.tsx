import React, { useState, useEffect, useRef } from 'react';
import { LessonModule } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useWebSocket } from '../../context/WebSocketContext';
import { Check, ArrowRight, ArrowLeft, HeartHandshake, ShieldCheck, List, X, Sparkles } from 'lucide-react';

interface LessonReaderProps {
  module: LessonModule;
  onNavigateToQuiz: () => void;
  onNavigateToFlashcards: () => void;
}

export const LessonReader: React.FC<LessonReaderProps> = ({ module, onNavigateToQuiz }) => {
  const { t } = useLanguage();
  const { syncProgress } = useWebSocket();
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [completedSections, setCompletedSections] = useState<Record<string, boolean>>({});
  const [readingTimeSec, setReadingTimeSec] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const readerTopRef = useRef<HTMLDivElement>(null);
  const chipsContainerRef = useRef<HTMLDivElement>(null);

  const currentSection = module.sections[activeSectionIndex];

  // Track active reading time
  useEffect(() => {
    const timer = setInterval(() => {
      setReadingTimeSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sync telemetry with tutor on section change
  useEffect(() => {
    if (currentSection) {
      syncProgress({
        moduleId: module.id,
        sectionTitle: currentSection.title,
        scrollProgress: Math.round(((activeSectionIndex + 1) / module.sections.length) * 100),
        readingTimeSec
      });
    }
  }, [activeSectionIndex, currentSection, module.id]);

  // Scroll active chip into view on section change
  useEffect(() => {
    if (chipsContainerRef.current) {
      const activeChip = chipsContainerRef.current.children[activeSectionIndex] as HTMLElement;
      if (activeChip) {
        activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeSectionIndex]);

  const toggleComplete = (secId: string) => {
    setCompletedSections((prev) => ({
      ...prev,
      [secId]: !prev[secId]
    }));
  };

  const handleSelectSection = (index: number) => {
    setActiveSectionIndex(index);
    setIsDrawerOpen(false);
    readerTopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNext = () => {
    if (activeSectionIndex < module.sections.length - 1) {
      handleSelectSection(activeSectionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeSectionIndex > 0) {
      handleSelectSection(activeSectionIndex - 1);
    }
  };

  // Convert custom markdown formatting to rich mobile-responsive JSX
  const renderFormattedContent = (rawText: string) => {
    const lines = rawText.split('\n');
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeaders: string[] = [];

    const flushTable = () => {
      if (tableHeaders.length > 0 || tableRows.length > 0) {
        elements.push(
          <div className="table-responsive-wrapper" key={`table-${elements.length}`}>
            <table className="minimal-table">
              <thead>
                <tr>
                  {tableHeaders.map((th, i) => (
                    <th key={i}>{th.trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx}>
                        {cell.trim().replace(/\*\*(.*?)\*\*/g, '$1')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      inTable = false;
      tableRows = [];
      tableHeaders = [];
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        const parts = trimmed.split('|').slice(1, -1);
        if (parts.some((p) => p.includes('---'))) {
          return;
        }
        if (!inTable) {
          inTable = true;
          tableHeaders = parts;
        } else {
          tableRows.push(parts);
        }
        return;
      } else if (inTable) {
        flushTable();
      }

      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={idx} style={{ fontFamily: 'var(--font-serif)', marginTop: '1.6rem', marginBottom: '0.75rem', color: 'var(--sumi-ink)' }}>
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('#### ')) {
        elements.push(
          <h4 key={idx} style={{ fontFamily: 'var(--font-sans)', marginTop: '1.25rem', marginBottom: '0.5rem', color: 'var(--nadeshiko-dark)' }}>
            {trimmed.replace('#### ', '')}
          </h4>
        );
      } else if (trimmed.startsWith('##### ')) {
        elements.push(
          <h5 key={idx} style={{ marginTop: '1rem', marginBottom: '0.35rem', color: 'var(--sumi-light)', fontWeight: 600 }}>
            {trimmed.replace('##### ', '')}
          </h5>
        );
      } else if (trimmed.startsWith('> ')) {
        elements.push(
          <blockquote key={idx}>
            {trimmed.replace('> ', '')}
          </blockquote>
        );
      } else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const itemText = trimmed.substring(2);
        elements.push(
          <li key={idx} style={{ marginLeft: '1.25rem', marginBottom: '0.4rem', color: 'var(--sumi-ink)' }}>
            {itemText}
          </li>
        );
      } else if (trimmed.startsWith('```') || trimmed === '---') {
        return;
      } else if (trimmed.length > 0) {
        elements.push(
          <p key={idx} style={{ marginBottom: '0.85rem', color: 'var(--sumi-ink)', lineHeight: 1.8 }}>
            {trimmed}
          </p>
        );
      }
    });

    if (inTable) {
      flushTable();
    }

    return elements;
  };

  const progressPercent = Math.round(
    (Object.values(completedSections).filter(Boolean).length / module.sections.length) * 100
  );

  return (
    <div ref={readerTopRef} style={{ maxWidth: '1140px', margin: '0 auto', padding: '1rem' }}>
      {/* Top Mobile Module Meta Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.85rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
            <span className="category-tag">Week {module.weekNumber} • {module.code}</span>
            <span style={{ fontSize: '0.7rem', color: 'var(--hai-light)' }}>•</span>
            <span style={{ fontSize: '0.74rem', color: 'var(--hai-slate)' }}>
              {module.estimatedMinutes} min read
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--sumi-ink)', lineHeight: 1.3 }}>
            {module.title}
          </h2>
        </div>

        {/* Compact Mastery Progress Badge */}
        <div
          style={{
            background: 'var(--gofun-white)',
            border: '1px solid var(--sakura-border)',
            borderRadius: 'var(--radius-pill)',
            padding: '0.35rem 0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem'
          }}
        >
          <span style={{ fontSize: '0.72rem', color: 'var(--hai-slate)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Progress
          </span>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--nadeshiko-dark)' }}>
            {progressPercent}%
          </span>
          <div style={{ width: '40px', height: '5px', background: 'var(--sakura-soft)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--nadeshiko-rose)', transition: 'width 0.3s ease' }} />
          </div>
        </div>
      </div>

      {/* Mobile Horizontal Section Chip Scroller & Drawer Trigger */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
        <button
          className="btn-minimal"
          onClick={() => setIsDrawerOpen(true)}
          style={{ padding: '0.45rem 0.75rem', fontSize: '0.78rem', flexShrink: 0 }}
          title="Open Table of Contents"
        >
          <List size={14} />
          <span>Sections ({module.sections.length})</span>
        </button>

        <div className="section-chips-scroller" ref={chipsContainerRef} style={{ flex: 1 }}>
          {module.sections.map((sec, idx) => {
            const isCurrent = idx === activeSectionIndex;
            const isDone = completedSections[sec.id];
            return (
              <button
                key={sec.id}
                className={`section-chip-btn ${isCurrent ? 'active' : ''}`}
                onClick={() => handleSelectSection(idx)}
              >
                <div className="section-chip-badge">
                  {isDone ? <Check size={11} strokeWidth={3} /> : idx + 1}
                </div>
                <span>{sec.title.split(' ')[0]} {idx + 1}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Reading Card */}
      <main>
        <article className="editorial-card" style={{ padding: '1.5rem' }}>
          {/* Section Header */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="category-tag">Section {activeSectionIndex + 1} of {module.sections.length}</span>
              <button
                className={completedSections[currentSection.id] ? 'btn-primary' : 'btn-minimal'}
                onClick={() => toggleComplete(currentSection.id)}
                style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', minHeight: '34px' }}
              >
                <Check size={13} />
                <span>{completedSections[currentSection.id] ? 'Completed ✓' : 'Mark Read'}</span>
              </button>
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 600, color: 'var(--sumi-ink)', lineHeight: 1.35 }}>
              {currentSection.title}
            </h1>
            {currentSection.subtitle && (
              <p style={{ fontSize: '0.85rem', color: 'var(--hai-slate)', fontStyle: 'italic', marginTop: '0.3rem' }}>
                {currentSection.subtitle}
              </p>
            )}
          </div>

          <hr className="hairline-divider" />

          {/* Formatted Content */}
          <div className="reading-prose">
            {renderFormattedContent(currentSection.content)}
          </div>

          {/* Key Principles Box */}
          {currentSection.keyTakeaways && currentSection.keyTakeaways.length > 0 && (
            <div
              style={{
                background: 'var(--sakura-soft)',
                border: '1px solid var(--sakura-border-hover)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginTop: '1.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.65rem' }}>
                <ShieldCheck size={16} color="var(--nadeshiko-dark)" />
                <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '0.92rem', color: 'var(--nadeshiko-dark)' }}>
                  {t('student.keyTakeaways')}
                </span>
              </div>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                {currentSection.keyTakeaways.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.45rem', fontSize: '0.85rem', color: 'var(--sumi-ink)' }}>
                    <span style={{ color: 'var(--nadeshiko-rose)', fontWeight: 'bold' }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Clinical Correlation Box */}
          {currentSection.clinicalCorrelations && currentSection.clinicalCorrelations.length > 0 && (
            <div
              style={{
                background: 'var(--shironeri-silk)',
                border: '1px solid var(--hai-border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                marginTop: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.65rem' }}>
                <HeartHandshake size={16} color="var(--sumi-ink)" />
                <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: '0.92rem', color: 'var(--sumi-ink)' }}>
                  {t('student.clinicalCorrelations')}
                </span>
              </div>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                {currentSection.clinicalCorrelations.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.45rem', fontSize: '0.85rem', color: 'var(--sumi-light)' }}>
                    <span style={{ color: 'var(--hai-slate)', fontWeight: 'bold' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Thumb-Friendly Navigation */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '2rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--sakura-border)',
              gap: '0.5rem'
            }}
          >
            <button
              className="btn-minimal"
              onClick={handlePrev}
              disabled={activeSectionIndex === 0}
              style={{ opacity: activeSectionIndex === 0 ? 0.35 : 1, padding: '0.55rem 0.9rem' }}
            >
              <ArrowLeft size={14} />
              <span>Previous</span>
            </button>

            {activeSectionIndex < module.sections.length - 1 ? (
              <button className="btn-primary" onClick={handleNext} style={{ padding: '0.55rem 1.25rem' }}>
                <span>Next Section</span>
                <ArrowRight size={14} />
              </button>
            ) : (
              <button className="btn-primary" onClick={onNavigateToQuiz} style={{ padding: '0.55rem 1.25rem' }}>
                <span>Take Quiz</span>
                <Sparkles size={14} />
              </button>
            )}
          </div>
        </article>
      </main>

      {/* Slide-up Table of Contents Bottom Sheet Drawer */}
      {isDrawerOpen && (
        <div className="drawer-backdrop" onClick={() => setIsDrawerOpen(false)}>
          <div className="drawer-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-handle" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1.25rem 0.75rem', borderBottom: '1px solid var(--sakura-border)' }}>
              <div>
                <span className="category-tag">Table of Contents</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--sumi-ink)' }}>
                  Module Sections
                </h3>
              </div>
              <button className="btn-minimal" onClick={() => setIsDrawerOpen(false)} style={{ padding: '0.35rem', border: 'none' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ overflowY: 'auto', padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {module.sections.map((sec, idx) => {
                const isCurrent = idx === activeSectionIndex;
                const isDone = completedSections[sec.id];
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleSelectSection(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isCurrent ? 'var(--sakura-soft)' : 'transparent',
                      border: `1px solid ${isCurrent ? 'var(--sakura-border-hover)' : 'var(--hai-border)'}`,
                      textAlign: 'left',
                      cursor: 'pointer',
                      width: '100%'
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        flexShrink: 0,
                        background: isDone ? 'var(--nadeshiko-rose)' : isCurrent ? 'var(--sakura-blush)' : 'var(--hai-border)',
                        color: isDone ? '#FFFFFF' : 'var(--sumi-ink)'
                      }}
                    >
                      {isDone ? <Check size={12} strokeWidth={3} /> : idx + 1}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.86rem', fontWeight: isCurrent ? 600 : 500, color: isCurrent ? 'var(--nadeshiko-dark)' : 'var(--sumi-ink)' }}>
                        {sec.title}
                      </div>
                      {sec.subtitle && (
                        <div style={{ fontSize: '0.72rem', color: 'var(--hai-slate)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {sec.subtitle}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
