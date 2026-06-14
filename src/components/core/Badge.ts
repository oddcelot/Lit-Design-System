import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export type BadgeTone = 'neutral' | 'accent' | 'cyan' | 'success' | 'warning' | 'error';

const TONES: Record<BadgeTone, { bg: string; fg: string }> = {
  neutral: { bg: 'var(--surface-container-high)', fg: 'var(--text-secondary)' },
  accent:  { bg: 'var(--accent-soft)', fg: 'var(--accent)' },
  cyan:    { bg: 'hsl(187 100% 47% / 0.16)', fg: 'var(--accent-cyan)' },
  success: { bg: 'var(--success-soft)', fg: 'var(--success)' },
  warning: { bg: 'var(--warning-soft)', fg: 'var(--warning)' },
  error:   { bg: 'var(--error-soft)', fg: 'var(--error)' },
};

export class Badge extends LitElement {
  static properties = {
    tone: { type: String },
    dot: { type: Boolean },
    mono: { type: Boolean },
  };

  tone: BadgeTone = 'neutral';
  dot: boolean = false;
  mono: boolean = false;

  render() {
    const t = TONES[this.tone] || TONES.neutral;
    const classes = classMap({
      'lit-badge': true,
      [`lit-badge--${this.tone}`]: true,
    });
    return html`
      <span
        class="${classes}"
        style="
          display: inline-flex;
          align-items: center;
          gap: 5px;
          height: 20px;
          padding: 0 8px;
          border-radius: var(--radius-pill);
          background: ${t.bg};
          color: ${t.fg};
          font: var(--weight-semibold) var(--text-2xs)/1 ${this.mono ? 'var(--font-mono)' : 'var(--font-sans)'};
          letter-spacing: ${this.mono ? 0 : 'var(--tracking-wide)'};
          white-space: nowrap;
        "
      >
        ${this.dot ? html`<span style="width:6px;height:6px;border-radius:50%;background:${t.fg};flex-shrink:0;"></span>` : ''}
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('lit-badge', Badge);
