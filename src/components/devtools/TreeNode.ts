import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import '../core/Icon.js';

export class TreeNode extends LitElement {
  static properties = {
    tag: { type: String },
    depth: { type: Number },
    expandable: { type: Boolean },
    expanded: { type: Boolean },
    selected: { type: Boolean },
    badge: { type: String },
  };

  tag?: string;
  depth: number = 0;
  expandable: boolean = false;
  expanded: boolean = false;
  selected: boolean = false;
  badge?: string;

  private _onSelect() {
    this.dispatchEvent(new CustomEvent('select', { bubbles: true, composed: true }));
  }

  private _onToggle(e: MouseEvent) {
    e.stopPropagation();
    if (this.expandable) {
      this.dispatchEvent(new CustomEvent('toggle', { bubbles: true, composed: true }));
    }
  }

  render() {
    const classes = classMap({
      'lit-treenode': true,
      'is-selected': this.selected,
    });
    return html`
      <div>
        <div
          role="treeitem"
          aria-selected="${this.selected ? 'true' : 'false'}"
          aria-expanded="${this.expandable ? (this.expanded ? 'true' : 'false') : 'undefined'}"
          class="${classes}"
          @click="${this._onSelect}"
          style="
            display: flex;
            align-items: center;
            gap: 4px;
            height: 26px;
            padding-right: 10px;
            padding-left: ${8 + this.depth * 16}px;
            border-radius: var(--radius-sm);
            background: ${this.selected ? 'var(--accent)' : 'transparent'};
            color: ${this.selected ? 'var(--on-accent)' : 'var(--text)'};
            cursor: pointer;
            user-select: none;
            transition: background var(--dur-instant) var(--ease-standard);
          "
        >
          <span
            @click="${this._onToggle}"
            style="
              display: inline-flex;
              width: 16px;
              height: 16px;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              opacity: ${this.expandable ? 1 : 0};
              transform: ${this.expanded ? 'rotate(0deg)' : 'rotate(-90deg)'};
              transition: transform var(--dur-fast) var(--ease-standard);
              color: currentColor;
            "
          >
            <lit-icon name="chevron-down" size="14"></lit-icon>
          </span>
          <span style="
            font: var(--weight-medium) var(--text-sm)/1 var(--font-mono);
            white-space: nowrap;
            color: ${this.selected ? 'var(--on-accent)' : 'var(--code-tag)'};
          ">
            <span style="opacity: 0.55;">&lt;</span>${this.tag}<span style="opacity: 0.55;">&gt;</span>
          </span>
          ${this.badge != null ? html`
            <span style="
              margin-left: auto;
              font: var(--weight-semibold) var(--text-2xs)/1 var(--font-mono);
              color: ${this.selected ? 'var(--on-accent)' : 'var(--text-muted)'};
              opacity: ${this.selected ? 0.8 : 1};
            ">${this.badge}</span>
          ` : ''}
        </div>
        ${this.expandable && this.expanded ? html`<slot></slot>` : ''}
      </div>
    `;
  }
}

customElements.define('lit-tree-node', TreeNode);
