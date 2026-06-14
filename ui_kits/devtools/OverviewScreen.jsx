// Overview / home dashboard
const { StatCard: OV_StatCard, Icon: OV_Icon } = window.LitDesignSystem_5536fe;

function OverviewScreen({ data, onNavigate }) {
  const links = [
    { icon: 'star', label: 'Star on GitHub' },
    { icon: 'bulb', label: 'Ideas & Suggestions' },
    { icon: 'map', label: 'Project Roadmap' },
    { icon: 'bug', label: 'Bug Reports' },
    { icon: 'settings', label: 'Settings', go: 'settings' },
  ];
  const kbd = (txt) => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 9px',
      background: 'var(--surface-container-high)', borderRadius: 'var(--radius-sm)',
      font: 'var(--weight-semibold) var(--text-xs)/1 var(--font-sans)', color: 'var(--text-secondary)' }}>{txt}</span>
  );
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '32px 48px', gap: 0, overflow: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
        <img src="../../assets/flame.svg" height="56" alt="" />
        <span style={{ font: 'var(--weight-extrabold) var(--text-4xl)/1 var(--font-sans)',
          color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>DevTools</span>
      </div>
      <div style={{ font: 'var(--weight-medium) var(--text-sm)/1 var(--font-mono)',
        color: 'var(--text-secondary)', marginBottom: 36 }}>Lit DevTools v1.0.0</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(170px, 220px))',
        gap: 16, width: '100%', maxWidth: 720, marginBottom: 32 }}>
        <OV_StatCard icon="package" value={'v' + data.version} label="Lit" accent onClick={() => onNavigate('elements')} />
        <OV_StatCard icon="route" value={String(data.routes.length)} label="pages" onClick={() => onNavigate('routes')} />
        <OV_StatCard icon="components" value="24" label="custom elements" onClick={() => onNavigate('elements')} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 28, marginBottom: 40 }}>
        {links.map((l) => (
          <button key={l.label} onClick={() => l.go && onNavigate(l.go)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'none', border: 'none',
              cursor: 'pointer', color: 'var(--text-secondary)',
              font: 'var(--weight-medium) var(--text-sm)/1 var(--font-sans)' }}>
            <OV_Icon name={l.icon} size={17} /> {l.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)',
          font: 'var(--weight-medium) var(--text-sm)/1 var(--font-sans)' }}>
          Press {kbd('⌘ Command')} + {kbd('K')} to toggle Command Palette
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)',
          font: 'var(--weight-medium) var(--text-sm)/1 var(--font-sans)' }}>
          Press {kbd('⇧ Shift')} + {kbd('⌥ Option')} + {kbd('D')} to toggle DevTools
        </div>
      </div>
    </div>
  );
}
window.OverviewScreen = OverviewScreen;
