import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * TreeNode — one row in the custom-element / component tree. Renders an
 * angle-bracket tag label like `<my-element>`. Handles indentation,
 * the expand chevron, selection highlight, and nested children.
 */
export function TreeNode({
  tag,
  depth = 0,
  expandable = false,
  expanded = false,
  selected = false,
  badge,
  onToggle,
  onSelect,
  children,
  style = {},
}) {
  return (
    <div style={style}>
      <div
        role="treeitem"
        aria-selected={selected}
        aria-expanded={expandable ? expanded : undefined}
        onClick={() => onSelect && onSelect()}
        className={`lit-treenode${selected ? ' is-selected' : ''}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          height: 26,
          paddingRight: 10,
          paddingLeft: 8 + depth * 16,
          borderRadius: 'var(--radius-sm)',
          background: selected ? 'var(--accent)' : 'transparent',
          color: selected ? 'var(--on-accent)' : 'var(--text)',
          cursor: 'pointer',
          userSelect: 'none',
          transition: 'background var(--dur-instant) var(--ease-standard)',
        }}
      >
        <span
          onClick={(e) => { e.stopPropagation(); expandable && onToggle && onToggle(); }}
          style={{
            display: 'inline-flex',
            width: 16,
            height: 16,
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            opacity: expandable ? 1 : 0,
            transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform var(--dur-fast) var(--ease-standard)',
            color: 'currentColor',
          }}
        >
          <Icon name="chevron-down" size={14} />
        </span>
        <span
          style={{
            font: 'var(--weight-medium) var(--text-sm)/1 var(--font-mono)',
            whiteSpace: 'nowrap',
            color: selected ? 'var(--on-accent)' : 'var(--code-tag)',
          }}
        >
          <span style={{ opacity: 0.55 }}>&lt;</span>
          {tag}
          <span style={{ opacity: 0.55 }}>&gt;</span>
        </span>
        {badge != null && (
          <span
            style={{
              marginLeft: 'auto',
              font: 'var(--weight-semibold) var(--text-2xs)/1 var(--font-mono)',
              color: selected ? 'var(--on-accent)' : 'var(--text-muted)',
              opacity: selected ? 0.8 : 1,
            }}
          >
            {badge}
          </span>
        )}
      </div>
      {expandable && expanded ? children : null}
    </div>
  );
}
