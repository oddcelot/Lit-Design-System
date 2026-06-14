( () => {
  const base = '../..';
  const s = document.createElement('script');
  s.type = 'module';
  s.src = base + '/src/index.ts';
  s.onerror = () =>
    console.error(
      'ds-base.js: failed to load ' + s.src +
      ' — ensure Vite dev server is running (npm run dev)'
    );
  document.head.appendChild(s);
})();
