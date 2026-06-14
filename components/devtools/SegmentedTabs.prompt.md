SegmentedTabs is an inline segmented control for switching views within a panel.

```jsx
const [tab, setTab] = React.useState('props');
<SegmentedTabs value={tab} onChange={setTab}
  items={[{id:'props',label:'Properties'},{id:'attrs',label:'Attributes'},{id:'events',label:'Events'}]} />
```

Props: `items` ([{id,label}]), `value`, `onChange(id)`, `size` (sm · md).
