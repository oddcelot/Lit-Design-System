import { LitElement, html } from 'lit';
import '../core/Icon.js';

const COLORS = {
  string: 'var(--code-string)',
  number: 'var(--code-number)',
  boolean: 'var(--code-keyword)',
  ref: 'var(--code-tag)',
  object: 'var(--text-secondary)',
  function: 'var(--code-callee)',
  null: 'var(--text-muted)',
};

export class StateRow extends LitElement {
  static properties = {
    name: { type: String },
    value: { type: String },
    type: { type: String },
    depth: { type: Number },
    expandable: { type: Boolean },
    expanded: { type: Boolean },
    badge: { type: String },
  };

  constructor() {
    super();
    this.type = 'string';
    this.depth = 0;
    this.expandable = false;
    this.expanded = false;
  }

  _onToggle() {
    if (this.expandable) {
      this.dispatchEvent(new CustomEvent('toggle', { bubbles: true, composed: true }));
    }
  }

  _renderValue() {
    const t = this.type || (
      typeof this.value === 'number' ? 'number' :
      typeof this.value === 'boolean' ? 'boolean' : 'string'
    );
    let text = this.value;
    if (t === 'string') text = `"${this.value}"`;
    const color = COLORS[t] || 'var(--text)';
    return html`<span style="color: ${color}; font-weight: var(--weight-medium);">${text}</span>`;
  }

  render() {
    return html`
      <div>
        <div
          class="lit-staterow"
          @click="${this._onToggle}"
          style="
            display: flex;
            align-items: center;
            gap: 4px;
            min-height: 24px;
            padding-right: 10px;
            padding-left: ${6 + this.depth * 16}px;
            border-radius: var(--radius-xs);
            cursor: ${this.expandable ? 'pointer' : 'default'};
            font: var(--weight-regular) var(--text-sm)/1.5 var(--font-mono);
          "
        >
          <span style="
            display: inline-flex;
            width: 14px;
            height: 14px;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            opacity: ${this.expandable ? 0.7 : 0};
            transform: ${this.expanded ? 'rotate(0deg)' : 'rotate(-90deg)'};
            transition: transform var(--dur-fast) var(--ease-standard);
            color: var(--text-secondary);
          ">
            <lit-icon name="chevron-down" size="12"></lit-icon>
          </span>
          <span style="color: var(--code-property);">${this.name}</span>
          <span style="color: var(--text-muted); margin: 0 2px;">:</span>
          ${this.expandable
            ? html`<span style="color: var(--text-secondary);">${this.value}</span>`
            : this._renderValue()
          }
          ${this.badge != null ? html`
            <span style="margin-left: 6px; font: var(--weight-semibold) var(--text-2xs)/1 var(--font-sans); color: var(--accent-cyan);">
              ${this.badge}
            </span>
          ` : ''}
        </div>
        ${this.expandable && this.expanded ? html`<slot></slot>` : ''}
      </div>
    `;
  }
}

customElements.define('lit-state-row', StateRow);
