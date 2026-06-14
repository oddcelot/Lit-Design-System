import React from 'react';

/**
 * Switch — boolean toggle. Controlled via `checked` + `onChange(next)`.
 */
export function Switch({ checked = false, onChange, disabled = false, size = 'md', label, style = {}, ...rest }) {
  const sizes = { sm: { w: 30, h: 18, k: 12 }, md: { w: 38, h: 22, k: 16 } };
  const s = sizes[size] || sizes.md;
  const pad = (s.h - s.k) / 2;
  const toggle = (
    <span
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      onClick={() => !disabled && onChange && onChange(!checked)}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); onChange && onChange(!checked); }
      }}
      className={`lit-switch${checked ? ' is-on' : ''}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        width: s.w,
        height: s.h,
        flexShrink: 0,
        padding: pad,
        borderRadius: 'var(--radius-pill)',
        background: checked ? 'var(--accent)' : 'var(--surface-elevated)',
        border: `1px solid ${checked ? 'transparent' : 'var(--border-strong)'}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          width: s.k,
          height: s.k,
          borderRadius: '50%',
          background: checked ? 'var(--on-accent)' : 'var(--text-secondary)',
          transform: `translateX(${checked ? s.w - s.k - pad * 2 : 0}px)`,
          transition: 'transform var(--dur-fast) var(--ease-emphasized), background var(--dur-fast)',
        }}
      />
    </span>
  );

  if (!label) return toggle;
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer' }}>
      {toggle}
      <span style={{ font: 'var(--weight-medium) var(--text-sm)/1 var(--font-sans)', color: 'var(--text)' }}>{label}</span>
    </label>
  );
}
