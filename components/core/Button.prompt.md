Button is the primary action control — use it for any user-triggered action; flame-blue `primary` for the main action on a surface, `secondary`/`ghost` for lower emphasis, `danger` for destructive ones.

```jsx
<Button variant="primary" icon="plus">New element</Button>
<Button variant="secondary" size="sm">Filter</Button>
<Button variant="ghost" icon="refresh" />
```

Props: `variant` (primary · secondary · ghost · danger), `size` (sm · md · lg), `icon` / `iconRight` (any `IconName`), `full` (full-width), plus native button attrs. Pass `disabled` to dim and block interaction.
