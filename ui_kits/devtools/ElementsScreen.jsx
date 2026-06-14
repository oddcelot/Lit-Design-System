// Elements inspector — component tree + state panel
const { Input: EL_Input, TreeNode: EL_TreeNode, StateRow: EL_StateRow,
  IconButton: EL_IconButton, Badge: EL_Badge, Icon: EL_Icon } = window.LitDesignSystem_5536fe;

function flattenSelectable(nodes, acc = []) {
  nodes.forEach((n) => { acc.push(n); if (n.children) flattenSelectable(n.children, acc); });
  return acc;
}

function ElTree({ nodes, expanded, selected, onToggle, onSelect }) {
  return nodes.map((n) => (
    <EL_TreeNode
      key={n.id}
      tag={n.tag}
      depth={n.depth}
      expandable={!!n.expandable}
      expanded={expanded[n.id] !== false}
      selected={selected === n.id}
      badge={n.count != null ? n.count : undefined}
      onToggle={() => onToggle(n.id)}
      onSelect={() => onSelect(n.id)}
    >
      {n.children ? (
        <ElTree nodes={n.children} expanded={expanded} selected={selected} onToggle={onToggle} onSelect={onSelect} />
      ) : null}
    </EL_TreeNode>
  ));
}

const SECTION_META = {
  props: { label: 'reactive properties', badge: '@property', tone: 'accent' },
  internal: { label: 'internal state', badge: '@state', tone: 'cyan' },
  attributes: { label: 'attributes', badge: null, tone: 'neutral' },
  events: { label: 'events', badge: null, tone: 'neutral' },
};

function StateSection({ id, rows, openSections, toggleSection }) {
  const meta = SECTION_META[id];
  const open = openSections[id] !== false;
  if (!rows || !rows.length) return null;
  return (
    <div style={{ marginBottom: 4 }}>
      <div onClick={() => toggleSection(id)}
        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 6px', cursor: 'pointer',
          font: 'var(--weight-bold) var(--text-xs)/1 var(--font-sans)', color: 'var(--text)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>
        <span style={{ display: 'inline-flex', transform: open ? 'rotate(0)' : 'rotate(-90deg)',
          transition: 'transform var(--dur-fast) var(--ease-standard)', color: 'var(--text-secondary)' }}>
          <EL_Icon name="chevron-down" size={13} />
        </span>
        {meta.label}
        {meta.badge && <EL_Badge tone={meta.tone}>{meta.badge}</EL_Badge>}
      </div>
      {open && (
        <div style={{ paddingLeft: 2 }}>
          {rows.map((r, i) => (
            <EL_StateRow key={i} name={r.name} value={r.value} type={r.type} depth={1}
              badge={r.type === 'ref' ? '⚡' : undefined} />
          ))}
        </div>
      )}
    </div>
  );
}

function ElementsScreen({ data }) {
  const [expanded, setExpanded] = React.useState({});
  const [selected, setSelected] = React.useState('item2');
  const [openSections, setOpenSections] = React.useState({});
  const [filter, setFilter] = React.useState('');

  const toggle = (id) => setExpanded((e) => ({ ...e, [id]: e[id] === false ? true : false }));
  const toggleSection = (id) => setOpenSections((s) => ({ ...s, [id]: s[id] === false ? true : false }));

  const all = flattenSelectable(data.tree);
  const selNode = all.find((n) => n.id === selected) || all[0];
  const st = data.state[selected] || data.state.item2;
  const filtered = (rows) => !filter ? rows : rows.filter((r) => r.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 0 }}>
      {/* Tree panel */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0,
        borderRight: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', gap: 8, padding: '12px 14px', alignItems: 'center' }}>
          <EL_Input icon="search" placeholder="Find components…" />
          <EL_IconButton icon="target" label="Select element in page" variant="ghost" />
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '0 8px 8px' }}>
          <ElTree nodes={data.tree} expanded={expanded} selected={selected}
            onToggle={toggle} onSelect={setSelected} />
        </div>
      </div>

      {/* State panel */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        <div style={{ display: 'flex', gap: 8, padding: '12px 14px', alignItems: 'center' }}>
          <span style={{ font: 'var(--weight-semibold) var(--text-sm)/1 var(--font-mono)',
            color: 'var(--code-tag)', whiteSpace: 'nowrap' }}>
            <span style={{ opacity: 0.55 }}>&lt;</span>{selNode.tag}<span style={{ opacity: 0.55 }}>&gt;</span>
          </span>
          <EL_Input icon="filter" placeholder="Filter state…" value={filter} onChange={(e) => setFilter(e.target.value)} />
          <EL_IconButton icon="eye" label="Inspect in console" />
          <EL_IconButton icon="code" label="View source" />
          <EL_IconButton icon="external-link" label="Open in new window" />
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '4px 14px 14px' }}>
          <StateSection id="props" rows={filtered(st.props)} openSections={openSections} toggleSection={toggleSection} />
          <StateSection id="internal" rows={filtered(st.internal)} openSections={openSections} toggleSection={toggleSection} />
          <StateSection id="attributes" rows={filtered(st.attributes)} openSections={openSections} toggleSection={toggleSection} />
          <StateSection id="events" rows={filtered(st.events)} openSections={openSections} toggleSection={toggleSection} />
        </div>
      </div>
    </div>
  );
}
window.ElementsScreen = ElementsScreen;
