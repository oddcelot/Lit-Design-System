Switch is a controlled boolean toggle — the standard control for DevTools settings rows. Drive it with `checked` + `onChange`.

```jsx
const [on, setOn] = React.useState(true);
<Switch checked={on} onChange={setOn} label="Highlight updates" />
```

Props: `checked`, `onChange(next)`, `disabled`, `size` (sm · md), `label`.
