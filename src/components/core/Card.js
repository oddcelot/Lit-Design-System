import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

const PADS = { none: 0, sm: 'var(--space-5)', md: 'var(--space-7)', lg: 'var(--space-9)' };

export class Card extends LitElement {
  static properties = {
    title: { type: String },
    subtitle: { type: String },
    padding: { type: String },
    interactive: { type: Boolean },
  };

  constructor() {
    super();
    this.padding = 'md';
    this.interactive = false;
  }

  render() {
    const pad = PADS[this.padding] ?? PADS.md;
    const classes = classMap({
      'lit-card': true,
      'lit-card--interactive': this.interactive,
    });
    return html`
      <div
        class="${classes}"
        style="
          background: var(--surface-container);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          ${this.interactive ? 'cursor: pointer;' : ''}
        "
      >
        ${this.title ? html`
          <div style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--space-5);
            padding: 12px 16px;
            border-bottom: 1px solid var(--border-subtle);
          ">
            <div style="min-width: 0;">
              <div style="font: var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans); color: var(--text);">
                ${this.title}
              </div>
              ${this.subtitle ? html`
                <div style="margin-top:2px; font: var(--weight-regular) var(--text-xs)/1.4 var(--font-sans); color: var(--text-secondary);">
                  ${this.subtitle}
                </div>
              ` : ''}
            </div>
            <slot name="actions"></slot>
          </div>
        ` : ''}
        <div style="padding: ${pad};">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('lit-card', Card);
