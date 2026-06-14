Input is a single-line text field. Add `icon="search"` for the DevTools-style filter fields; `trailing` for a kbd hint or clear button.

```jsx
<Input icon="search" placeholder="Find components…" />
<Input placeholder="Filter state…" trailing={<kbd>⌘K</kbd>} />
```

Props: `icon`, `size` (sm · md · lg), `full`, `invalid`, `trailing`, `wrapStyle`, plus native input attrs.
