SegmentedTabs is an inline segmented control for switching views within a panel.

```html
<lit-segmented-tabs id="tabs" value="props" size="sm"></lit-segmented-tabs>
<script>
  const tabs = document.getElementById('tabs');
  tabs.items = [{id:'props',label:'Properties'},{id:'attrs',label:'Attributes'},{id:'events',label:'Events'}];
  tabs.addEventListener('change', (e) => console.log(e.detail.value));
</script>
```

Props: `items` ([{id,label}]), `value`, `size` (sm · md). Emits `change` event (`e.detail.value`).
