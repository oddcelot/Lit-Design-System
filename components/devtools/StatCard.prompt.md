StatCard is the big overview tile on the DevTools home dashboard — icon, large value, caption. Make it a button by passing `onClick`.

```jsx
<StatCard icon="package" value="v3.2.1" label="Lit" accent />
<StatCard icon="components" value="24" label="custom elements" onClick={goElements} />
```

Props: `icon`, `value`, `label`, `accent`, plus button attrs.
