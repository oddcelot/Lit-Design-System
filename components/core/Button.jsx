import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * Button — primary action control for the Lit system.
 * Variants: primary (flame blue), secondary (outlined), ghost, danger.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled = false,
  full = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { height: 28, padding: '0 10px', font: 'var(--text-xs)', gap: 6, icon: 15 },
    md: { height: 34, padding: '0 14px', font: 'var(--text-sm)', gap: 7, icon: 17 },
    lg: { height: 42, padding: '0 20px', font: 'var(--text-md)', gap: 8, icon: 19 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--on-accent)',
      border: '1px solid transparent',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text)',
      border: '1px solid var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent',
    },
    danger: {
      background: 'var(--error-soft)',
      color: 'var(--error)',
      border: '1px solid transparent',
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      disabled={disabled}
      className={`lit-btn lit-btn--${variant}`}
      style={{
        display: full ? 'flex' : 'inline-flex',
        width: full ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        font: `var(--weight-semibold) ${s.font}/1 var(--font-sans)`,
        letterSpacing: 'var(--tracking-snug)',
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        whiteSpace: 'nowrap',
        transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast), transform var(--dur-instant)',
        ...v,
        ...style,
      }}
      {...rest}
    >
      {icon ? <Icon name={icon} size={s.icon} /> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={s.icon} /> : null}
    </button>
  );
}
