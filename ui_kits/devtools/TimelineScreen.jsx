// Timeline — reactive update / lifecycle events
const { SegmentedTabs: TL_Tabs, Badge: TL_Badge, Icon: TL_Icon } = window.LitDesignSystem_5536fe;

const KIND_TONE = { update: 'accent', mount: 'success', unmount: 'error', event: 'cyan' };

function TimelineScreen({ data }) {
  const [filter, setFilter] = React.useState('all');
  const [sel, setSel] = React.useState(3);
  const items = data.timeline.filter((e) => filter === 'all' || e.kind === filter);
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
        borderBottom: '1px solid var(--border-subtle)' }}>
        <TL_Tabs value={filter} onChange={setFilter} size="sm" items={[
          { id: 'all', label: 'All' }, { id: 'update', label: 'Updates' },
          { id: 'mount', label: 'Mount' }, { id: 'event', label: 'Events' }]} />
        <span style={{ marginLeft: 'auto', font: 'var(--weight-medium) var(--text-xs)/1 var(--font-mono)',
          color: 'var(--text-muted)' }}>{items.length} events · 16.6ms frame budget</span>
      </div>
      {/* time ruler */}
      <div style={{ position: 'relative', height: 26, margin: '8px 16px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        {[0, 0.25, 0.5, 0.75, 1].map((p) => (
          <span key={p} style={{ position: 'absolute', left: `${p * 100}%`, top: 4, transform: 'translateX(-50%)',
            font: 'var(--weight-regular) 10px/1 var(--font-mono)', color: 'var(--text-muted)' }}>{Math.round(p * 1000)}ms</span>
        ))}
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '6px 16px 16px' }}>
        {items.map((e) => (
          <div key={e.id} onClick={() => setSel(e.id)}
            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '7px 10px', borderRadius: 'var(--radius-sm)',
              background: sel === e.id ? 'var(--surface-active)' : 'transparent', cursor: 'pointer' }}>
            <TL_Badge tone={KIND_TONE[e.kind]} dot>{e.kind}</TL_Badge>
            <span style={{ font: 'var(--weight-medium) var(--text-sm)/1 var(--font-mono)', color: 'var(--code-tag)',
              width: 110, flexShrink: 0 }}>&lt;{e.el}&gt;</span>
            {/* bar track */}
            <div style={{ flex: 1, position: 'relative', height: 8 }}>
              <div style={{ position: 'absolute', inset: '0 0', top: 1, height: 6, borderRadius: 'var(--radius-pill)',
                background: 'var(--surface-container-high)' }} />
              <div style={{ position: 'absolute', left: `${e.t * 100}%`, top: 1, width: 7, height: 6, borderRadius: 'var(--radius-pill)',
                background: `var(--${KIND_TONE[e.kind] === 'accent' ? 'accent' : KIND_TONE[e.kind] === 'cyan' ? 'accent-cyan' : KIND_TONE[e.kind]})` }} />
            </div>
            <span style={{ font: 'var(--weight-regular) var(--text-xs)/1 var(--font-sans)', color: 'var(--text-secondary)',
              width: 160, flexShrink: 0, textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.label}</span>
            <span style={{ font: 'var(--weight-semibold) var(--text-xs)/1 var(--font-mono)', color: 'var(--text-muted)',
              width: 48, flexShrink: 0, textAlign: 'right' }}>{e.dur}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
window.TimelineScreen = TimelineScreen;
