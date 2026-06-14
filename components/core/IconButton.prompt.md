IconButton is a square, icon-only control — use in toolbars, panel headers, and the DevTools navigation rail. Always pass `label` for accessibility & tooltip.

```jsx
<IconButton icon="settings" label="Settings" />
<IconButton icon="components" active label="Elements" />
<IconButton icon="refresh" variant="solid" label="Reload" />
```

Props: `icon` (IconName), `size` (sm · md · lg), `variant` (ghost · solid · accent), `active` (selected/highlighted), `label`.
