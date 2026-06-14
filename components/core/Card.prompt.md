Card is the generic surface container — use for panels, settings groups, and content blocks. Pass `card-title`/`subtitle` for a header row, or omit them for a plain padded surface. Use `slot="actions"` for header action controls.

```html
<lit-card card-title="Reactive properties">
  <lit-icon-button slot="actions" icon="refresh" label="Refresh"></lit-icon-button>
  …content…
</lit-card>
```

Props: `card-title`, `subtitle`, `padding` (none · sm · md · lg), `interactive`.
