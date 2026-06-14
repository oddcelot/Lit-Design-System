import React from 'react';

/**
 * Badge — compact status / count pill. Tones map to the semantic palette.
 * Use `dot` for a leading status dot; `mono` for code-ish values.
 */
export function Badge({ children, tone = 'neutral', dot = false, mono = false, style = {}, ...rest }) {
  const tones = {
    neutral: { bg: 'var(--surface-container-high)', fg: 'var(--text-secondary)' },
    accent:  { bg: 'var(--accent-soft)', fg: 'var(--accent)' },
    cyan:    { bg: 'hsl(187 100% 47% / 0.16)', fg: 'var(--accent-cyan)' },
    success: { bg: 'var(--success-soft)', fg: 'var(--success)' },
    warning: { bg: 'var(--warning-soft)', fg: 'var(--warning)' },
    error:   { bg: 'var(--error-soft)', fg: 'var(--error)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      className={`lit-badge lit-badge--${tone}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        height: 20,
        padding: '0 8px',
        borderRadius: 'var(--radius-pill)',
        background: t.bg,
        color: t.fg,
        font: `var(--weight-semibold) var(--text-2xs)/1 ${mono ? 'var(--font-mono)' : 'var(--font-sans)'}`,
        letterSpacing: mono ? 0 : 'var(--tracking-wide)',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot ? (
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.fg, flexShrink: 0 }} />
      ) : null}
      {children}
    </span>
  );
}
