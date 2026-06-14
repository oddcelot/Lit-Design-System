import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Input — single-line text field. Pass `icon` for a leading glyph (e.g. the
 * "Find components…" / "Filter state…" search fields in the DevTools).
 */
export function Input({
  icon,
  size = 'md',
  full = true,
  invalid = false,
  trailing,
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const sizes = {
    sm: { height: 28, font: 'var(--text-xs)', pad: 8, icon: 15 },
    md: { height: 34, font: 'var(--text-sm)', pad: 10, icon: 16 },
    lg: { height: 40, font: 'var(--text-md)', pad: 12, icon: 18 },
  };
  const s = sizes[size] || sizes.md;
  return (
    <div
      className="lit-input"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        width: full ? '100%' : undefined,
        height: s.height,
        padding: `0 ${s.pad}px`,
        background: 'var(--surface-low)',
        border: `1px solid ${invalid ? 'var(--error)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-md)',
        color: 'var(--text)',
        transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast)',
        ...wrapStyle,
      }}
    >
      {icon ? <Icon name={icon} size={s.icon} style={{ color: 'var(--text-muted)' }} /> : null}
      <input
        style={{
          flex: 1,
          minWidth: 0,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'inherit',
          font: `var(--weight-medium) ${s.font}/1 var(--font-sans)`,
          ...style,
        }}
        {...rest}
      />
      {trailing ? <span style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>{trailing}</span> : null}
    </div>
  );
}
