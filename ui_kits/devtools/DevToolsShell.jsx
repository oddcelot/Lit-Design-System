// DevTools window shell — rail + content router + floating pill
const { IconButton: SH_IconButton, Icon: SH_Icon } = window.LitDesignSystem_5536fe;

const RAIL_TOP = [
  { id: 'overview', icon: 'info', label: 'Overview' },
  { id: 'elements', icon: 'components', label: 'Elements' },
  { id: 'tree', icon: 'tree', label: 'Render tree' },
  { id: 'assets', icon: 'assets', label: 'Assets' },
  { id: 'routes', icon: 'route', label: 'Pages' },
  { id: 'timeline', icon: 'timeline', label: 'Timeline' },
  { id: 'graph', icon: 'graph', label: 'Graph' },
  { id: 'inspect', icon: 'search', label: 'Inspect' },
];

function EmptyState({ icon, title, desc }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', gap: 14, color: 'var(--text-muted)', textAlign: 'center', padding: 40 }}>
      <SH_Icon name={icon} size={44} strokeWidth={1.5} />
      <div style={{ font: 'var(--weight-bold) var(--text-lg)/1 var(--font-sans)', color: 'var(--text-secondary)' }}>{title}</div>
      <div style={{ font: 'var(--weight-regular) var(--text-sm)/1.5 var(--font-sans)', maxWidth: 320 }}>{desc}</div>
    </div>
  );
}

function DevToolsShell() {
  const data = window.LIT_DEMO;
  const [tab, setTab] = React.useState('overview');
  const [theme, setTheme] = React.useState('theme-dark');

  let content;
  if (tab === 'overview') content = <OverviewScreen data={data} onNavigate={setTab} />;
  else if (tab === 'elements' || tab === 'tree') content = <ElementsScreen data={data} />;
  else if (tab === 'routes') content = <RoutesScreen data={data} />;
  else if (tab === 'timeline') content = <TimelineScreen data={data} />;
  else if (tab === 'settings') content = <SettingsScreen theme={theme} setTheme={setTheme} />;
  else if (tab === 'assets') content = <EmptyState icon="assets" title="Assets" desc="Browse project files served by Vite. Pick a file to preview it with quick actions." />;
  else if (tab === 'graph') content = <EmptyState icon="graph" title="Module graph" desc="Visualise the import relationships between your modules and custom elements." />;
  else content = <EmptyState icon="search" title="Inspect" desc="Step through Vite's transform pipeline for any module in your app." />;

  const railBtn = (t) => (
    <button key={t.id} onClick={() => setTab(t.id)} title={t.label} aria-label={t.label}
      style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 40, height: 40, borderRadius: 'var(--radius-md)', border: 'none', cursor: 'pointer',
        background: tab === t.id ? 'var(--accent-soft)' : 'transparent',
        color: tab === t.id ? 'var(--accent)' : 'var(--text-secondary)',
        transition: 'background var(--dur-fast), color var(--dur-fast)' }}>
      <SH_Icon name={t.icon} size={21} strokeWidth={1.9} />
      {tab === t.id && <span style={{ position: 'absolute', left: -8, top: 11, width: 3, height: 18,
        borderRadius: 'var(--radius-pill)', background: 'var(--accent)' }} />}
    </button>
  );

  return (
    <div className={theme} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
      background: 'var(--bg)', borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
      boxShadow: 'var(--shadow-window)', position: 'relative' }}>
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {/* Rail */}
        <nav style={{ width: 'var(--rail-width)', flexShrink: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: 6, padding: '12px 0', borderRight: '1px solid var(--border-subtle)',
          background: 'var(--surface-low)' }}>
          <button onClick={() => setTab('overview')} title="Lit DevTools"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, marginBottom: 6 }}>
            <img src="../../assets/flame.svg" width="26" alt="Lit" />
          </button>
          <div style={{ width: 28, height: 1, background: 'var(--border)', margin: '2px 0 8px' }} />
          {RAIL_TOP.map(railBtn)}
          <div style={{ marginTop: 'auto' }} />
          {railBtn({ id: 'settings', icon: 'settings', label: 'Settings' })}
        </nav>
        {/* Content */}
        <main style={{ flex: 1, minWidth: 0, background: 'var(--surface)', position: 'relative' }}>
          {content}
        </main>
      </div>

      {/* Floating pill */}
      <div style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', alignItems: 'center', gap: 10, padding: '6px 12px', borderRadius: 'var(--radius-pill)',
        background: 'var(--surface-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
        <img src="../../assets/flame.svg" width="16" alt="" />
        <span style={{ width: 1, height: 16, background: 'var(--border)' }} />
        <SH_Icon name="target" size={16} style={{ color: 'var(--accent-cyan)' }} />
      </div>
    </div>
  );
}
window.DevToolsShell = DevToolsShell;
