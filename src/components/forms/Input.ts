import { LitElement, html } from 'lit';
import type { IconName } from '../core/Icon.js';
import '../core/Icon.js';

export type InputSize = 'sm' | 'md' | 'lg';

interface SizeConfig {
  height: number;
  font: string;
  pad: number;
  icon: number;
}

const SIZES: Record<InputSize, SizeConfig> = {
  sm: { height: 28, font: 'var(--text-xs)', pad: 8, icon: 15 },
  md: { height: 34, font: 'var(--text-sm)', pad: 10, icon: 16 },
  lg: { height: 40, font: 'var(--text-md)', pad: 12, icon: 18 },
};

export class Input extends LitElement {
  static properties = {
    icon: { type: String },
    size: { type: String },
    full: { type: Boolean },
    invalid: { type: Boolean },
    trailing: { type: String },
    placeholder: { type: String },
    value: { type: String },
  };

  icon?: IconName;
  size: InputSize = 'md';
  full: boolean = true;
  invalid: boolean = false;
  trailing?: string;
  placeholder?: string;
  value: string = '';

  private _onInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  }

  private _onChange() {
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  render() {
    const s = SIZES[this.size] || SIZES.md;
    return html`
      <div
        class="lit-input"
        style="
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: ${this.full ? '100%' : 'auto'};
          height: ${s.height}px;
          padding: 0 ${s.pad}px;
          background: var(--surface-low);
          border: 1px solid ${this.invalid ? 'var(--error)' : 'var(--border)'};
          border-radius: var(--radius-md);
          color: var(--text);
          transition: border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast);
        "
      >
        ${this.icon ? html`<lit-icon name="${this.icon}" size="${s.icon}" style="color: var(--text-muted);"></lit-icon>` : ''}
        <input
          .value="${this.value}"
          placeholder="${this.placeholder}"
          @input="${this._onInput}"
          @change="${this._onChange}"
          style="
            flex: 1;
            min-width: 0;
            background: transparent;
            border: none;
            outline: none;
            color: inherit;
            font: var(--weight-medium) ${s.font}/1 var(--font-sans);
          "
        />
        ${this.trailing ? html`<span style="display: flex; align-items: center; color: var(--text-muted);">${this.trailing}</span>` : ''}
      </div>
    `;
  }
}

customElements.define('lit-input', Input);
