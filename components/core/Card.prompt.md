Card is the generic surface container — use for panels, settings groups, and content blocks. Pass `title`/`subtitle`/`actions` for a header row, or omit them for a plain padded surface.

```jsx
<Card title="Reactive properties" actions={<IconButton icon="refresh" label="Refresh" />}>
  …content…
</Card>
```

Props: `title`, `subtitle`, `actions`, `padding` (none · sm · md · lg), `interactive`, `bodyStyle`.
