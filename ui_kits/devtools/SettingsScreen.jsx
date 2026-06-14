// Settings tab
const { Switch: SET_Switch, SegmentedTabs: SET_Tabs, Card: SET_Card } = window.LitDesignSystem_5536fe;

function SettingRow({ title, desc, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 4px',
      borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ font: 'var(--weight-semibold) var(--text-sm)/1.3 var(--font-sans)', color: 'var(--text)' }}>{title}</div>
        {desc && <div style={{ marginTop: 2, font: 'var(--weight-regular) var(--text-xs)/1.4 var(--font-sans)', color: 'var(--text-secondary)' }}>{desc}</div>}
      </div>
      <div style={{ flexShrink: 0 }}>{children}</div>
    </div>
  );
}

function SettingsScreen({ theme, setTheme }) {
  const [s, setS] = React.useState({ highlight: true, byFile: false, expand: true, palette: true, scroll: false });
  const set = (k) => (v) => setS((o) => ({ ...o, [k]: v }));
  return (
    <div style={{ height: '100%', overflow: 'auto', padding: '24px 32px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <SET_Card title="Appearance">
          <SettingRow title="Theme" desc="Match the editor or pin a mode.">
            <SET_Tabs value={theme} onChange={setTheme} size="sm"
              items={[{ id: 'theme-dark', label: 'Dark' }, { id: 'theme-light', label: 'Light' }]} />
          </SettingRow>
          <SettingRow title="Expand state by default" desc="Open reactive property groups on select.">
            <SET_Switch checked={s.expand} onChange={set('expand')} />
          </SettingRow>
        </SET_Card>

        <SET_Card title="Inspector">
          <SettingRow title="Highlight updates" desc="Flash elements in the page when they re-render.">
            <SET_Switch checked={s.highlight} onChange={set('highlight')} />
          </SettingRow>
          <SettingRow title="Group components by file" desc="Organise the tree by source module.">
            <SET_Switch checked={s.byFile} onChange={set('byFile')} />
          </SettingRow>
          <SettingRow title="Scroll to selected element" desc="Bring the element into view on select.">
            <SET_Switch checked={s.scroll} onChange={set('scroll')} />
          </SettingRow>
        </SET_Card>

        <SET_Card title="General">
          <SettingRow title="Command palette" desc="Enable the ⌘K quick actions overlay.">
            <SET_Switch checked={s.palette} onChange={set('palette')} />
          </SettingRow>
        </SET_Card>
      </div>
    </div>
  );
}
window.SettingsScreen = SettingsScreen;
