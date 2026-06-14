import React from 'react';
import { Icon } from '../core/Icon.jsx';

const COLORS = {
  string: 'var(--code-string)',
  number: 'var(--code-number)',
  boolean: 'var(--code-keyword)',
  ref: 'var(--code-tag)',
  object: 'var(--text-secondary)',
  function: 'var(--code-callee)',
  null: 'var(--text-muted)',
};

function renderValue(value, type) {
  const t = type || (typeof value === 'number' ? 'number' : typeof value === 'boolean' ? 'boolean' : 'string');
  let text = value;
  if (t === 'string') text = `"${value}"`;
  return <span style={{ color: COLORS[t] || 'var(--text)', fontWeight: 'var(--weight-medium)' }}>{text}</span>;
}

/**
 * StateRow — one key : value line in the state inspector. Auto-colors the
 * value by `type`. For objects/reactives set `expandable` and nest StateRows
 * as children.
 */
export function StateRow({
  name,
  value,
  type = 'string',
  depth = 0,
  expandable = false,
  expanded = false,
  badge,
  onToggle,
  children,
  style = {},
}) {
  return (
    <div style={style}>
      <div
        onClick={() => expandable && onToggle && onToggle()}
        className="lit-staterow"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          minHeight: 24,
          paddingRight: 10,
          paddingLeft: 6 + depth * 16,
          borderRadius: 'var(--radius-xs)',
          cursor: expandable ? 'pointer' : 'default',
          font: 'var(--weight-regular) var(--text-sm)/1.5 var(--font-mono)',
        }}
      >
        <span
          style={{
            display: 'inline-flex', width: 14, height: 14, flexShrink: 0,
            alignItems: 'center', justifyContent: 'center',
            opacity: expandable ? 0.7 : 0,
            transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform var(--dur-fast) var(--ease-standard)',
            color: 'var(--text-secondary)',
          }}
        >
          <Icon name="chevron-down" size={12} />
        </span>
        <span style={{ color: 'var(--code-property)' }}>{name}</span>
        <span style={{ color: 'var(--text-muted)', margin: '0 2px' }}>:</span>
        {expandable
          ? <span style={{ color: 'var(--text-secondary)' }}>{value}{badge != null ? null : ''}</span>
          : renderValue(value, type)}
        {badge != null && (
          <span style={{ marginLeft: 6, font: 'var(--weight-semibold) var(--text-2xs)/1 var(--font-sans)', color: 'var(--accent-cyan)' }}>
            {badge}
          </span>
        )}
      </div>
      {expandable && expanded ? children : null}
    </div>
  );
}
