import React from 'react';

/**
 * SegmentedTabs — inline segmented control for switching panels/views.
 * `items` is [{ id, label }], controlled via `value` + `onChange(id)`.
 */
export function SegmentedTabs({ items = [], value, onChange, size = 'md', style = {}, ...rest }) {
  const sizes = { sm: { h: 26, font: 'var(--text-xs)', pad: '0 10px' }, md: { h: 32, font: 'var(--text-sm)', pad: '0 14px' } };
  const s = sizes[size] || sizes.md;
  return (
    <div
      className="lit-segtabs"
      role="tablist"
      style={{
        display: 'inline-flex',
        gap: 2,
        padding: 3,
        background: 'var(--surface-low)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const active = it.id === value;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(it.id)}
            style={{
              height: s.h,
              padding: s.pad,
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              background: active ? 'var(--surface-elevated)' : 'transparent',
              color: active ? 'var(--text-strong)' : 'var(--text-secondary)',
              boxShadow: active ? 'var(--shadow-xs)' : 'none',
              font: `var(--weight-semibold) ${s.font}/1 var(--font-sans)`,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast)',
            }}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
