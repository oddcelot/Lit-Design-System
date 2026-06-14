import { LitElement, html } from 'lit';

const SIZES = {
  sm: { h: 26, font: 'var(--text-xs)', pad: '0 10px' },
  md: { h: 32, font: 'var(--text-sm)', pad: '0 14px' },
};

export class SegmentedTabs extends LitElement {
  static properties = {
    items: { type: Array },
    value: { type: String },
    size: { type: String },
  };

  constructor() {
    super();
    this.items = [];
    this.size = 'md';
  }

  _onSelect(id) {
    if (id !== this.value) {
      this.dispatchEvent(new CustomEvent('change', { detail: { value: id }, bubbles: true, composed: true }));
    }
  }

  render() {
    const s = SIZES[this.size] || SIZES.md;
    return html`
      <div
        class="lit-segtabs"
        role="tablist"
        style="
          display: inline-flex;
          gap: 2px;
          padding: 3px;
          background: var(--surface-low);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
        "
      >
        ${this.items.map((it) => {
          const active = it.id === this.value;
          return html`
            <button
              key="${it.id}"
              role="tab"
              aria-selected="${active ? 'true' : 'false'}"
              @click="${() => this._onSelect(it.id)}"
              style="
                height: ${s.h}px;
                padding: ${s.pad};
                border: none;
                border-radius: var(--radius-sm);
                background: ${active ? 'var(--surface-elevated)' : 'transparent'};
                color: ${active ? 'var(--text-strong)' : 'var(--text-secondary)'};
                box-shadow: ${active ? 'var(--shadow-xs)' : 'none'};
                font: var(--weight-semibold) ${s.font}/1 var(--font-sans);
                cursor: pointer;
                white-space: nowrap;
                transition: background var(--dur-fast) var(--ease-standard), color var(--dur-fast);
              "
            >${it.label}</button>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('lit-segmented-tabs', SegmentedTabs);
