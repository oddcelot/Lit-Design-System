TreeNode is one row of the custom-element inspector tree. Compose recursively, passing `depth` and nesting child TreeNodes inside.

```jsx
<TreeNode tag="my-app" depth={0} expandable expanded
  selected={sel==='app'} onSelect={()=>setSel('app')} onToggle={...}>
  <TreeNode tag="my-header" depth={1} onSelect={...} />
  <TreeNode tag="my-list" depth={1} expandable badge="3" />
</TreeNode>
```

Props: `tag`, `depth`, `expandable`, `expanded`, `selected`, `badge`, `onToggle`, `onSelect`, `children`.
