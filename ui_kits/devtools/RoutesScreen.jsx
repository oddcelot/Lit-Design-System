// Routes / Pages tab
const { Input: RT_Input, Badge: RT_Badge, StateRow: RT_StateRow } = window.LitDesignSystem_5536fe;

function RoutesScreen({ data }) {
  const [sel, setSel] = React.useState(0);
  const route = data.routes[sel];
  return (
    <div style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 0 }}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0, borderRight: '1px solid var(--border-subtle)' }}>
        <div style={{ padding: '12px 14px' }}>
          <RT_Input icon="search" placeholder="/active" defaultValue="/" />
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '0 8px 8px' }}>
          {data.routes.map((r, i) => (
            <div key={r.path} onClick={() => setSel(i)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, height: 34, padding: '0 10px',
                borderRadius: 'var(--radius-sm)', cursor: 'pointer',
                background: sel === i ? 'var(--accent)' : 'transparent',
                color: sel === i ? 'var(--on-accent)' : 'var(--text)' }}>
              <span style={{ font: 'var(--weight-medium) var(--text-sm)/1 var(--font-mono)' }}>{r.path}</span>
              {r.active && <RT_Badge tone={sel === i ? 'neutral' : 'success'} dot>active</RT_Badge>}
              <span style={{ marginLeft: 'auto', font: 'var(--weight-regular) var(--text-xs)/1 var(--font-sans)',
                opacity: 0.7 }}>{r.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <div style={{ padding: '12px 16px', font: 'var(--weight-bold) var(--text-sm)/1 var(--font-sans)',
          color: 'var(--text)' }}>Route detail</div>
        <div style={{ flex: 1, overflow: 'auto', padding: '4px 16px 16px' }}>
          <RT_StateRow name="path" value={route.path} type="string" />
          <RT_StateRow name="name" value={route.name} type="string" />
          <RT_StateRow name="matched" value={route.matched} type="ref" />
          <RT_StateRow name="active" value={!!route.active} type="boolean" />
          <RT_StateRow name="params" value="Object" expandable expanded>
            <RT_StateRow name="id" value="—" type="null" depth={1} />
          </RT_StateRow>
        </div>
      </div>
    </div>
  );
}
window.RoutesScreen = RoutesScreen;
