import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export type SwitchSize = 'sm' | 'md';

interface SizeConfig {
  w: number;
  h: number;
  k: number;
}

const SIZES: Record<SwitchSize, SizeConfig> = {
  sm: { w: 30, h: 18, k: 12 },
  md: { w: 38, h: 22, k: 16 },
};

export class Switch extends LitElement {
  static properties = {
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    size: { type: String },
    label: { type: String },
  };

  checked: boolean = false;
  disabled: boolean = false;
  size: SwitchSize = 'md';
  label?: string;

  private _onToggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true,
    }));
  }

  private _onKeyDown(e: KeyboardEvent) {
    if (this.disabled) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      this._onToggle();
    }
  }

  render() {
    const s = SIZES[this.size] || SIZES.md;
    const pad = (s.h - s.k) / 2;
    const classes = classMap({
      'lit-switch': true,
      'is-on': this.checked,
    });

    const toggle = html`
      <span
        role="switch"
        aria-checked="${this.checked ? 'true' : 'false'}"
        aria-disabled="${this.disabled ? 'true' : 'false'}"
        tabindex="${this.disabled ? -1 : 0}"
        class="${classes}"
        @click="${this._onToggle}"
        @keydown="${this._onKeyDown}"
        style="
          display: inline-flex;
          align-items: center;
          width: ${s.w}px;
          height: ${s.h}px;
          flex-shrink: 0;
          padding: ${pad}px;
          border-radius: var(--radius-pill);
          background: ${this.checked ? 'var(--accent)' : 'var(--surface-elevated)'};
          border: 1px solid ${this.checked ? 'transparent' : 'var(--border-strong)'};
          cursor: ${this.disabled ? 'not-allowed' : 'pointer'};
          opacity: ${this.disabled ? 0.5 : 1};
          transition: background var(--dur-fast) var(--ease-standard);
        "
      >
        <span style="
          width: ${s.k}px;
          height: ${s.k}px;
          border-radius: 50%;
          background: ${this.checked ? 'var(--on-accent)' : 'var(--text-secondary)'};
          transform: translateX(${this.checked ? s.w - s.k - pad * 2 : 0}px);
          transition: transform var(--dur-fast) var(--ease-emphasized), background var(--dur-fast);
        "></span>
      </span>
    `;

    if (!this.label) return toggle;

    return html`
      <label style="
        display: inline-flex;
        align-items: center;
        gap: 10px;
        cursor: ${this.disabled ? 'not-allowed' : 'pointer'};
      ">
        ${toggle}
        <span style="font: var(--weight-medium) var(--text-sm)/1 var(--font-sans); color: var(--text);">${this.label}</span>
      </label>
    `;
  }
}

customElements.define('lit-switch', Switch);
