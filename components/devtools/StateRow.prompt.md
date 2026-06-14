StateRow is one `key : value` line in the state inspector. The value is auto-colored by `type`. Use `expandable` + nested StateRows for objects/reactives.

```jsx
<StateRow name="count" value={0} type="number" />
<StateRow name="label" value="Submit" type="string" />
<StateRow name="config" value="Object" expandable expanded badge="Reactive">
  <StateRow name="open" value={true} type="boolean" depth={1} />
</StateRow>
```

Props: `name`, `value`, `type` (string · number · boolean · ref · object · function · null), `depth`, `expandable`, `expanded`, `badge`, `onToggle`, `children`.
