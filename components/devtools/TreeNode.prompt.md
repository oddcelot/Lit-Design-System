TreeNode is one row of the custom-element inspector tree. Compose recursively, passing `depth` and nesting child TreeNodes inside.

```html
<lit-tree-node tag="my-app" depth="0" expandable expanded>
  <lit-tree-node tag="my-header" depth="1"></lit-tree-node>
  <lit-tree-node tag="my-list" depth="1" expandable badge="3"></lit-tree-node>
</lit-tree-node>
```

Props: `tag`, `depth`, `expandable`, `expanded`, `selected`, `badge`. Emits `select` and `toggle` events.
