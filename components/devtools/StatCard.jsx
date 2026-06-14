import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * StatCard — the large overview tiles on the DevTools home screen
 * (Lit version · pages · custom elements). Icon on top, value, label.
 */
export function StatCard({ icon, value, label, accent = false, onClick, style = {}, ...rest }) {
  return (
    <button
      onClick={onClick}
      className="lit-statcard"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-5)',
        padding: '28px 24px',
        background: 'var(--surface-container)',
        border: `1px solid ${accent ? 'var(--accent-soft)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-lg)',
        cursor: onClick ? 'pointer' : 'default',
        textAlign: 'center',
        transition: 'border-color var(--dur-fast) var(--ease-standard), background var(--dur-fast)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={30} strokeWidth={1.75} style={{ color: accent ? 'var(--accent)' : 'var(--text-secondary)' }} />
      <div style={{ font: 'var(--weight-extrabold) var(--text-2xl)/1 var(--font-sans)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>
        {value}
      </div>
      <div style={{ font: 'var(--weight-medium) var(--text-sm)/1 var(--font-sans)', color: 'var(--text-secondary)' }}>
        {label}
      </div>
    </button>
  );
}
