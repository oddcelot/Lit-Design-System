import React from 'react';

/**
 * Card — generic surface container with optional header. Use for panels,
 * setting groups, and content blocks. `interactive` adds hover affordance.
 */
export function Card({
  children,
  title,
  subtitle,
  actions,
  padding = 'md',
  interactive = false,
  style = {},
  bodyStyle = {},
  ...rest
}) {
  const pads = { none: 0, sm: 'var(--space-5)', md: 'var(--space-7)', lg: 'var(--space-9)' };
  const pad = pads[padding] ?? pads.md;
  return (
    <div
      className="lit-card"
      style={{
        background: 'var(--surface-container)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: interactive
          ? 'border-color var(--dur-fast) var(--ease-standard), background var(--dur-fast)'
          : undefined,
        cursor: interactive ? 'pointer' : undefined,
        ...style,
      }}
      {...rest}
    >
      {(title || actions) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-5)',
            padding: '12px 16px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ minWidth: 0 }}>
            {title && (
              <div style={{ font: 'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)', color: 'var(--text)' }}>
                {title}
              </div>
            )}
            {subtitle && (
              <div style={{ marginTop: 2, font: 'var(--weight-regular) var(--text-xs)/1.4 var(--font-sans)', color: 'var(--text-secondary)' }}>
                {subtitle}
              </div>
            )}
          </div>
          {actions ? <div style={{ display: 'flex', gap: 'var(--space-3)', flexShrink: 0 }}>{actions}</div> : null}
        </div>
      )}
      <div style={{ padding: pad, ...bodyStyle }}>{children}</div>
    </div>
  );
}
