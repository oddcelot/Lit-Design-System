StateRow is one `key : value` line in the state inspector. The value is auto-colored by `type`. Use `expandable` + nested StateRows for objects/reactives.

```html
<lit-state-row name="count" value="0" type="number"></lit-state-row>
<lit-state-row name="label" value="Submit" type="string"></lit-state-row>
<lit-state-row name="config" value="Object" expandable expanded badge="Reactive">
  <lit-state-row name="open" value="true" type="boolean" depth="1"></lit-state-row>
</lit-state-row>
```

Props: `name`, `value`, `type` (string · number · boolean · ref · object · function · null), `depth`, `expandable`, `expanded`, `badge`. Emits `toggle` event.
