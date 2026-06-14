import { LitElement, html, css } from 'lit';
import manifest from '../_ds_manifest.json';

interface NavItem {
  name: string;
  path: string;
  group: string;
  subtitle?: string;
}

class SiteNav extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 220px;
      background: var(--surface-container);
      border-right: 1px solid var(--border-subtle);
      display: flex;
      flex-direction: column;
      z-index: 100;
      overflow-y: auto;
      box-sizing: border-box;
      view-transition-name: nav;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 16px;
      border-bottom: 1px solid var(--border-subtle);
      font: var(--weight-bold) var(--text-sm)/1 var(--font-sans);
      color: var(--text-strong);
      flex-shrink: 0;
    }

    .header img {
      display: block;
      flex-shrink: 0;
    }

    .group {
      padding: 12px 0;
      border-bottom: 1px solid var(--border-subtle);
      flex-shrink: 0;
    }

    .group-title {
      padding: 0 16px 6px;
      font: var(--weight-semibold) var(--text-2xs)/1 var(--font-sans);
      text-transform: uppercase;
      letter-spacing: var(--tracking-caps);
      color: var(--text-muted);
    }

    .link {
      display: block;
      padding: 6px 16px;
      font: var(--weight-medium) var(--text-xs)/1.4 var(--font-sans);
      color: var(--text-secondary);
      text-decoration: none;
      border-left: 3px solid transparent;
      transition: background var(--dur-fast), color var(--dur-fast);
    }

    .link:hover {
      background: var(--surface-hover);
      color: var(--text);
    }

    .link.active {
      background: var(--accent-soft);
      color: var(--accent);
      border-left-color: var(--accent);
    }
  `;

  currentPath = '';
  items: NavItem[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.currentPath = this.normalizePath(location.pathname);
    this.loadItems();
  }

  private normalizePath(pathname: string) {
    return pathname.replace(/^\//, '').replace(/\/$/, '') || 'index.html';
  }

  private loadItems() {
    this.items = [
      { name: 'Playground', path: 'index.html', group: 'site' },
      ...(manifest.cards || []).map((c: any) => ({
        name: c.name,
        path: c.path,
        group: c.group,
        subtitle: c.subtitle,
      })),
      ...(manifest.startingPoints || []).map((s: any) => ({
        name: s.name,
        path: s.path,
        group: s.section,
        subtitle: s.subtitle,
      })),
      { name: 'DevTools template', path: 'templates/lit-devtools/index.html', group: 'Screens', subtitle: 'Static template page' },
    ];

    this.requestUpdate();
  }

  private isActive(path: string) {
    const target = path.split('/').pop();
    const current = this.currentPath.split('/').pop();
    if (!target || !current) return false;
    return current === target || current === target.replace(/\.html$/, '');
  }

  private linkHref(path: string) {
    const currentDir = this.currentPath.includes('/')
      ? this.currentPath.replace(/\/[^/]*$/, '')
      : '';
    const targetDir = path.includes('/') ? path.replace(/\/[^/]*$/, '') : '';

    const currentParts = currentDir ? currentDir.split('/') : [];
    const targetParts = targetDir ? targetDir.split('/') : [];
    const fileName = path.split('/').pop()!;

    const parts = [...Array(currentParts.length).fill('..'), ...targetParts, fileName];
    return parts.join('/');
  }

  private groupItems(): [string, NavItem[]][] {
    const order = ['site', 'Screens', 'Components', 'DevTools', 'Brand', 'Colors', 'Type', 'Spacing'];
    const map = new Map<string, NavItem[]>();

    for (const item of this.items) {
      if (!map.has(item.group)) map.set(item.group, []);
      map.get(item.group)!.push(item);
    }

    return Array.from(map.entries()).sort((a, b) => {
      const ai = order.indexOf(a[0]);
      const bi = order.indexOf(b[0]);
      if (ai === -1 && bi === -1) return a[0].localeCompare(b[0]);
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    });
  }

  render() {
    const groups = this.groupItems();
    return html`
      <div class="header">
        <img src="${this.linkHref('assets/flame.svg')}" height="24" width="24" alt="Lit" />
        <span>Lit Design System</span>
      </div>
      ${groups.map(([group, items]) => html`
        <div class="group">
          <div class="group-title">${group === 'site' ? 'overview' : group}</div>
          ${items.map(item => html`
            <a
              class="link ${this.isActive(item.path) ? 'active' : ''}"
              href="${this.linkHref(item.path)}"
              title="${item.subtitle || item.name}"
            >
              ${item.name}
            </a>
          `)}
        </div>
      `)}
    `;
  }
}

customElements.define('lit-site-nav', SiteNav);

function injectViewTransitionStyles() {
  if (document.getElementById('lit-site-nav-transitions')) return;
  const style = document.createElement('style');
  style.id = 'lit-site-nav-transitions';
  style.textContent = `
    @view-transition {
      navigation: auto;
    }

    ::view-transition-group(nav) {
      animation: none;
    }

    ::view-transition-old(root) {
      animation: var(--dur-normal) var(--ease-standard) both vt-slide-out;
    }

    ::view-transition-new(root) {
      animation: var(--dur-normal) var(--ease-standard) both vt-slide-in;
    }

    @keyframes vt-slide-out {
      to {
        opacity: 0;
        transform: translateX(-12px);
      }
    }

    @keyframes vt-slide-in {
      from {
        opacity: 0;
        transform: translateX(12px);
      }
    }
  `;
  document.head.appendChild(style);
}

function injectNav() {
  if (document.querySelector('lit-site-nav')) return;
  const nav = document.createElement('lit-site-nav');
  document.body.prepend(nav);
  document.body.style.paddingLeft = '248px';
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectViewTransitionStyles();
    injectNav();
  });
} else {
  injectViewTransitionStyles();
  injectNav();
}
