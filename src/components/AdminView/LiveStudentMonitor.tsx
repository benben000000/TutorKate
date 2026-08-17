import React from 'react';
import { useWebSocket } from '../../context/WebSocketContext';
import { User } from 'lucide-react';

export const LiveStudentMonitor: React.FC = () => {
  const { studentStatus, isConnected } = useWebSocket();

  const isOnline = studentStatus?.online && isConnected;

  return (
    <div className="editorial-card" style={{ marginBottom: '1.25rem', padding: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--sakura-soft)',
              border: '1px solid var(--sakura-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--nadeshiko-dark)',
              flexShrink: 0
            }}
          >
            <User size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--sumi-ink)' }}>
                {studentStatus?.name || 'Katelyn Xhin'}
              </h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.7rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: 'var(--radius-pill)',
                  background: isOnline ? 'rgba(76, 175, 80, 0.08)' : 'rgba(107, 104, 102, 0.08)',
                  color: isOnline ? '#2E7D32' : 'var(--hai-slate)',
                  border: `1px solid ${isOnline ? 'rgba(76, 175, 80, 0.2)' : 'var(--hai-border)'}`
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: isOnline ? '#2E7D32' : 'var(--hai-light)' }} />
                <span>{isOnline ? 'Online' : 'Standby'}</span>
              </div>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--hai-slate)' }}>
              BSN • ANPH111 Laboratory Live Session
            </p>
          </div>
        </div>

        {/* Telemetry Info */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%', maxWidth: '360px', justifyContent: 'space-between', background: 'var(--shironeri-silk)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--hai-border)' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--hai-slate)' }}>
              Current Focus
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--sumi-ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {studentStatus?.currentSectionTitle || 'University Mission & Values'}
            </div>
          </div>

          <div style={{ height: '24px', width: '1px', background: 'var(--sakura-border)' }} />

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--hai-slate)' }}>
              Progress
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--nadeshiko-dark)' }}>
              {studentStatus?.scrollProgress || 0}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
