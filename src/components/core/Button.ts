import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import type { IconName } from './Icon.js';
import './Icon.js';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface SizeConfig {
  height: number;
  padding: string;
  font: string;
  gap: number;
  icon: number;
}

const SIZES: Record<ButtonSize, SizeConfig> = {
  sm: { height: 28, padding: '0 10px', font: 'var(--text-xs)', gap: 6, icon: 15 },
  md: { height: 34, padding: '0 14px', font: 'var(--text-sm)', gap: 7, icon: 17 },
  lg: { height: 42, padding: '0 20px', font: 'var(--text-md)', gap: 8, icon: 19 },
};

const VARIANTS: Record<ButtonVariant, { background: string; color: string; border: string }> = {
  primary:   { background: 'var(--accent)', color: 'var(--on-accent)', border: '1px solid transparent' },
  secondary: { background: 'transparent', color: 'var(--text)', border: '1px solid var(--border-strong)' },
  ghost:     { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid transparent' },
  danger:    { background: 'var(--error-soft)', color: 'var(--error)', border: '1px solid transparent' },
};

export class Button extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
    icon: { type: String },
    iconRight: { type: String, attribute: 'icon-right' },
    disabled: { type: Boolean, reflect: true },
    full: { type: Boolean },
  };

  variant: ButtonVariant = 'primary';
  size: ButtonSize = 'md';
  icon?: IconName;
  iconRight?: IconName;
  disabled: boolean = false;
  full: boolean = false;

  render() {
    const s = SIZES[this.size] || SIZES.md;
    const v = VARIANTS[this.variant] || VARIANTS.primary;
    const classes = classMap({
      'lit-btn': true,
      [`lit-btn--${this.variant}`]: true,
    });
    return html`
      <button
        class="${classes}"
        ?disabled="${this.disabled}"
        style="
          display: ${this.full ? 'flex' : 'inline-flex'};
          width: ${this.full ? '100%' : 'auto'};
          align-items: center;
          justify-content: center;
          gap: ${s.gap}px;
          height: ${s.height}px;
          padding: ${s.padding};
          font: var(--weight-semibold) ${s.font}/1 var(--font-sans);
          letter-spacing: var(--tracking-snug);
          border-radius: var(--radius-md);
          cursor: ${this.disabled ? 'not-allowed' : 'pointer'};
          opacity: ${this.disabled ? 0.45 : 1};
          white-space: nowrap;
          transition: background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast), transform var(--dur-instant);
          background: ${v.background};
          color: ${v.color};
          border: ${v.border};
        "
      >
        ${this.icon ? html`<lit-icon name="${this.icon}" size="${s.icon}"></lit-icon>` : ''}
        <slot></slot>
        ${this.iconRight ? html`<lit-icon name="${this.iconRight}" size="${s.icon}"></lit-icon>` : ''}
      </button>
    `;
  }
}

customElements.define('lit-button', Button);
