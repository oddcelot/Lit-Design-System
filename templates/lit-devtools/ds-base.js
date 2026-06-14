( () => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/dist/_ds_bundle.js';
  s.onerror = () =>
    console.error(
      'ds-base.js: failed to load ' + s.src +
      ' — ensure Vite build has been run (npm run build)'
    );
  document.head.appendChild(s);
})();
