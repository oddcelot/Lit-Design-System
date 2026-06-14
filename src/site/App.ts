import { LitElement, html, css } from 'lit';
import { Router } from '@lit-labs/router';
import 'urlpattern-polyfill';
import manifest from '../../_ds_manifest.json';

const GROUP_ORDER = ['site', 'Screens', 'Components', 'DevTools', 'Brand', 'Colors', 'Type', 'Spacing'];

interface NavItem {
  name: string;
  path: string;
  group: string;
  subtitle?: string;
}

export class SiteApp extends LitElement {
  static styles = css`
    :host {
      display: flex;
      min-height: 100vh;
    }

    .nav {
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
      text-decoration: none;
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

    main {
      flex: 1;
      margin-left: 220px;
      padding-left: 28px;
      min-height: 100vh;
      box-sizing: border-box;
    }

    iframe {
      width: 100%;
      height: 100vh;
      border: 0;
      opacity: 0;
      transition: opacity var(--dur-normal) var(--ease-standard);
    }

    iframe.loaded {
      opacity: 1;
    }
  `;

  private _router = new Router(this, [
    { path: '/', enter: () => this._setFrame('pages/playground.html') },
    { path: '/theme-showcase', enter: () => this._setFrame('theme-showcase.html') },
    ...(manifest.cards || []).map((card: any) => ({
      path: '/' + card.path.replace(/\.html$/, ''),
      enter: () => this._setFrame(card.path),
    })),
    ...(manifest.startingPoints || []).map((sp: any) => ({
      path: '/' + sp.path.replace(/\.html$/, ''),
      enter: () => this._setFrame(sp.path),
    })),
    { path: '/templates/lit-devtools', enter: () => this._setFrame('templates/lit-devtools/index.html') },
    { path: '/*', enter: () => this._setFrame('pages/playground.html') },
  ]);

  static properties = {
    _frameSrc: { type: String, state: true },
    _frameLoaded: { type: Boolean, state: true },
  };

  private _frameSrc = 'pages/playground.html';
  private _frameLoaded = true;

  private _navItems: NavItem[] = [
    { name: 'Playground', path: '/', group: 'site' },
    ...(manifest.cards || []).map((c: any) => ({
      name: c.name,
      path: '/' + c.path.replace(/\.html$/, ''),
      group: c.group,
      subtitle: c.subtitle,
    })),
    ...(manifest.startingPoints || []).map((s: any) => ({
      name: s.name,
      path: '/' + s.path.replace(/\.html$/, ''),
      group: s.section,
      subtitle: s.subtitle,
    })),
    {
      name: 'DevTools template',
      path: '/templates/lit-devtools',
      group: 'Screens',
      subtitle: 'Static template page',
    },
  ];

  private _setFrame(src: string) {
    if (src === this._frameSrc) return true;
    this._frameLoaded = false;
    this._frameSrc = src;
    return true;
  }

  private _groupItems(): [string, NavItem[]][] {
    const map = new Map<string, NavItem[]>();
    for (const item of this._navItems) {
      if (!map.has(item.group)) map.set(item.group, []);
      map.get(item.group)!.push(item);
    }
    return Array.from(map.entries()).sort((a, b) => {
      const ai = GROUP_ORDER.indexOf(a[0]);
      const bi = GROUP_ORDER.indexOf(b[0]);
      if (ai === -1 && bi === -1) return a[0].localeCompare(b[0]);
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    });
  }

  private _isActive(path: string) {
    return location.pathname === path || location.pathname === path + '.html';
  }

  render() {
    const groups = this._groupItems();
    return html`
      <nav class="nav">
        <a class="header" href="/">
          <img src="assets/flame.svg" height="24" width="24" alt="Lit" />
          <span>Lit Design System</span>
        </a>
        ${groups.map(([group, items]) => html`
          <div class="group">
            <div class="group-title">${group === 'site' ? 'overview' : group}</div>
            ${items.map(item => html`
              <a
                class="link ${this._isActive(item.path) ? 'active' : ''}"
                href=${item.path}
                title=${item.subtitle || item.name}
              >${item.name}</a>
            `)}
          </div>
        `)}
      </nav>
      <main>
        <iframe
          .src=${this._frameSrc}
          ?loaded=${this._frameLoaded}
          @load=${() => (this._frameLoaded = true)}
        ></iframe>
      </main>
    `;
  }
}

customElements.define('site-app', SiteApp);
