import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * IconButton — square, icon-only control. Used heavily in the DevTools
 * rail, panel headers, and toolbars. Set `active` for the selected rail tab.
 */
export function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  active = false,
  label,
  style = {},
  ...rest
}) {
  const sizes = { sm: 26, md: 32, lg: 40 };
  const box = sizes[size] || sizes.md;
  const iconSize = Math.round(box * 0.56);

  const base = {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid transparent',
  };
  const variants = {
    ghost: base,
    solid: { background: 'var(--surface-container-high)', color: 'var(--text)', border: '1px solid var(--border)' },
    accent: { background: 'var(--accent)', color: 'var(--on-accent)', border: '1px solid transparent' },
  };
  const v = active
    ? { background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid transparent' }
    : (variants[variant] || base);

  return (
    <button
      aria-label={label}
      title={label}
      className={`lit-iconbtn${active ? ' is-active' : ''}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: box,
        height: box,
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast)',
        ...v,
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
