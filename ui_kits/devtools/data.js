// Fake Lit app data powering the DevTools UI kit demo.
window.LIT_DEMO = {
  version: '3.2.1',
  appName: 'todo-app',
  // Custom-element instance tree
  tree: [
    { id: 'app', tag: 'todo-app', depth: 0, expandable: true,
      children: [
        { id: 'header', tag: 'todo-header', depth: 1 },
        { id: 'input', tag: 'todo-input', depth: 1 },
        { id: 'list', tag: 'todo-list', depth: 1, expandable: true, count: 3,
          children: [
            { id: 'item1', tag: 'todo-item', depth: 2 },
            { id: 'item2', tag: 'todo-item', depth: 2 },
            { id: 'item3', tag: 'todo-item', depth: 2 },
          ] },
        { id: 'footer', tag: 'todo-footer', depth: 1 },
      ] },
  ],
  // State per element id
  state: {
    app: {
      props: [
        { name: 'heading', value: 'Things to do', type: 'string' },
        { name: 'remaining', value: 2, type: 'number' },
        { name: 'darkMode', value: true, type: 'boolean' },
      ],
      internal: [
        { name: '_filter', value: 'all', type: 'string' },
      ],
      attributes: [
        { name: 'app-version', value: '3.2.1', type: 'string' },
      ],
      events: [
        { name: 'todo-added', value: 'CustomEvent', type: 'ref' },
        { name: 'todo-cleared', value: 'CustomEvent', type: 'ref' },
      ],
    },
    item2: {
      props: [
        { name: 'label', value: 'Buy oat milk', type: 'string' },
        { name: 'done', value: false, type: 'boolean' },
        { name: 'index', value: 1, type: 'number' },
        { name: 'priority', value: 'high', type: 'string' },
      ],
      internal: [
        { name: '_editing', value: false, type: 'boolean' },
        { name: '_hovered', value: true, type: 'boolean' },
      ],
      attributes: [
        { name: 'role', value: 'listitem', type: 'string' },
        { name: 'data-id', value: 't-1042', type: 'string' },
      ],
      events: [
        { name: 'toggle', value: 'CustomEvent', type: 'ref' },
        { name: 'remove', value: 'CustomEvent', type: 'ref' },
      ],
    },
  },
  // Timeline of reactive updates
  timeline: [
    { id: 1, el: 'todo-item', kind: 'update', label: 'done: false → true', t: 0.08, dur: '0.4ms' },
    { id: 2, el: 'todo-list', kind: 'update', label: 'items changed', t: 0.10, dur: '1.2ms' },
    { id: 3, el: 'todo-app', kind: 'update', label: 'remaining: 3 → 2', t: 0.12, dur: '0.6ms' },
    { id: 4, el: 'todo-footer', kind: 'update', label: 'count re-render', t: 0.14, dur: '0.3ms' },
    { id: 5, el: 'todo-item', kind: 'mount', label: 'connectedCallback', t: 0.42, dur: '2.1ms' },
    { id: 6, el: 'todo-input', kind: 'event', label: 'input → keydown', t: 0.55, dur: '0.2ms' },
    { id: 7, el: 'todo-list', kind: 'update', label: 'items changed', t: 0.58, dur: '1.0ms' },
    { id: 8, el: 'todo-item', kind: 'unmount', label: 'disconnectedCallback', t: 0.74, dur: '0.5ms' },
  ],
  routes: [
    { path: '/', name: 'all', active: true, matched: 'todo-app' },
    { path: '/active', name: 'active', matched: 'todo-app' },
    { path: '/completed', name: 'completed', matched: 'todo-app' },
    { path: '/settings', name: 'settings', matched: 'settings-view' },
  ],
};
