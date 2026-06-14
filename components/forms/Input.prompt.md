Input is a single-line text field. Add `icon="search"` for the DevTools-style filter fields; `trailing` for a kbd hint or clear button.

```html
<lit-input icon="search" placeholder="Find components…"></lit-input>
<lit-input placeholder="Filter state…" trailing="⌘K"></lit-input>
```

Props: `icon`, `size` (sm · md · lg), `full`, `invalid`, `trailing`, `placeholder`, `value`. Emits `input` and `change` events.
