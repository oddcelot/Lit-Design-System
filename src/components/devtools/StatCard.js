import { LitElement, html } from 'lit';
import '../core/Icon.js';

export class StatCard extends LitElement {
  static properties = {
    icon: { type: String },
    value: { type: String },
    label: { type: String },
    accent: { type: Boolean },
    onClick: { type: Function },
  };

  constructor() {
    super();
    this.accent = false;
  }

  render() {
    return html`
      <button
        class="lit-statcard"
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--space-5);
          padding: 28px 24px;
          background: var(--surface-container);
          border: 1px solid ${this.accent ? 'var(--accent-soft)' : 'var(--border-subtle)'};
          border-radius: var(--radius-lg);
          cursor: pointer;
          text-align: center;
          transition: border-color var(--dur-fast) var(--ease-standard), background var(--dur-fast);
        "
      >
        <lit-icon name="${this.icon}" size="30" stroke-width="1.75" style="color: ${this.accent ? 'var(--accent)' : 'var(--text-secondary)'};"></lit-icon>
        <div style="font: var(--weight-extrabold) var(--text-2xl)/1 var(--font-sans); color: var(--text-strong); letter-spacing: var(--tracking-tight);">
          ${this.value}
        </div>
        <div style="font: var(--weight-medium) var(--text-sm)/1 var(--font-sans); color: var(--text-secondary);">
          ${this.label}
        </div>
      </button>
    `;
  }
}

customElements.define('lit-stat-card', StatCard);
