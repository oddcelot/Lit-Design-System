import { readFileSync } from 'fs';
import { resolve, dirname, relative } from 'path';

const GROUP_ORDER = ['site', 'Screens', 'Components', 'DevTools', 'Brand', 'Colors', 'Type', 'Spacing'];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function generateNav(currentFile, manifest) {
  const currentDir = dirname(currentFile);
  const currentFileName = currentFile.split('/').pop();

  const items = [
    { name: 'Playground', path: 'index.html', group: 'site' },
    ...(manifest.cards || []),
    ...(manifest.startingPoints || []).map((s) => ({
      name: s.name,
      path: s.path,
      group: s.section,
      subtitle: s.subtitle,
    })),
    {
      name: 'DevTools template',
      path: 'templates/lit-devtools/index.html',
      group: 'Screens',
      subtitle: 'Static template page',
    },
  ];

  const grouped = items.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group].push(item);
    return acc;
  }, {});

  const sortedGroups = Object.entries(grouped).sort((a, b) => {
    const ai = GROUP_ORDER.indexOf(a[0]);
    const bi = GROUP_ORDER.indexOf(b[0]);
    if (ai === -1 && bi === -1) return a[0].localeCompare(b[0]);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  const groupsHtml = sortedGroups
    .map(([group, groupItems]) => {
      const title = group === 'site' ? 'overview' : group;
      const links = groupItems
        .map((item) => {
          const isActive = currentFile === item.path;
          const href = relative(currentDir, item.path).replace(/\\/g, '/') || './';
          return `<a class="link ${isActive ? 'active' : ''}" href="${href}" title="${escapeHtml(
            item.subtitle || item.name
          )}">${escapeHtml(item.name)}</a>`;
        })
        .join('\n          ');
      return `
        <div class="group">
          <div class="group-title">${escapeHtml(title)}</div>
          ${links}
        </div>`;
    })
    .join('');

  const flameHref = relative(currentDir, 'assets/flame.svg').replace(/\\/g, '/') || './';

  return `
<lit-site-nav>
  <template shadowrootmode="open">
    <style>
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
    </style>
    <div class="header">
      <img src="${flameHref}" height="24" width="24" alt="Lit" />
      <span>Lit Design System</span>
    </div>${groupsHtml}
  </template>
</lit-site-nav>`;
}

export function injectSiteNav() {
  return {
    name: 'inject-site-nav',
    transformIndexHtml(html, ctx) {
      const manifest = JSON.parse(readFileSync(resolve('_ds_manifest.json'), 'utf8'));
      const currentFile = relative(process.cwd(), ctx.filename).replace(/\\/g, '/');
      const navHtml = generateNav(currentFile, manifest);

      const globalStyles = `
  <style>
    body {
      padding-left: 248px;
    }

    @view-transition {
      navigation: auto;
    }

    ::view-transition-group(nav) {
      animation: none;
    }

    ::view-transition-old(root) {
      animation: var(--dur-normal) var(--ease-standard) both vt-fade-out;
    }

    ::view-transition-new(root) {
      animation: var(--dur-normal) var(--ease-standard) both vt-fade-in;
    }

    @keyframes vt-fade-out {
      to { opacity: 0; }
    }

    @keyframes vt-fade-in {
      from { opacity: 0; }
    }
  </style>
`;

      html = html.replace(/<body[^>]*>/, (match) => `${match}\n${navHtml}`);
      html = html.replace('</head>', `${globalStyles}\n  </head>`);

      return html;
    },
  };
}
