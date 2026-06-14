import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import './Icon.js';

const SIZES = { sm: 26, md: 32, lg: 40 };

const VARIANTS = {
  ghost:  { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid transparent' },
  solid:  { background: 'var(--surface-container-high)', color: 'var(--text)', border: '1px solid var(--border)' },
  accent: { background: 'var(--accent)', color: 'var(--on-accent)', border: '1px solid transparent' },
};

const ACTIVE = { background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid transparent' };

export class IconButton extends LitElement {
  static properties = {
    icon: { type: String },
    size: { type: String },
    variant: { type: String },
    active: { type: Boolean },
    label: { type: String },
  };

  constructor() {
    super();
    this.size = 'md';
    this.variant = 'ghost';
    this.active = false;
  }

  render() {
    const box = SIZES[this.size] || SIZES.md;
    const iconSize = Math.round(box * 0.56);
    const v = this.active ? ACTIVE : (VARIANTS[this.variant] || VARIANTS.ghost);
    const classes = classMap({
      'lit-iconbtn': true,
      'is-active': this.active,
    });
    return html`
      <button
        class="${classes}"
        aria-label="${this.label}"
        title="${this.label}"
        style="
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: ${box}px;
          height: ${box}px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background var(--dur-fast) var(--ease-standard), color var(--dur-fast);
          background: ${v.background};
          color: ${v.color};
          border: ${v.border};
        "
      >
        <lit-icon name="${this.icon}" size="${iconSize}"></lit-icon>
      </button>
    `;
  }
}

customElements.define('lit-icon-button', IconButton);
