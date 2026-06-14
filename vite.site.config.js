import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';

const root = fileURLToPath(new URL('.', import.meta.url));

function findHtmlFiles(dir, baseDir = dir, entries = {}) {
  const items = readdirSync(dir);
  for (const item of items) {
    const fullPath = resolve(dir, item);
    const stat = statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && !['node_modules', 'dist-site', 'dist'].includes(item)) {
      findHtmlFiles(fullPath, baseDir, entries);
    } else if (item.endsWith('.html')) {
      let rel = fullPath.startsWith(baseDir) ? fullPath.slice(baseDir.length) : fullPath;
      rel = rel.replace(/^\//, '');
      let key = rel.replace(/\.html$/, '').replace(/\/index$/, '') || '_root';
      key = key.replace(/[/\s]+/g, '-');
      entries[key] = fullPath;
    }
  }
  return entries;
}

const htmlEntries = findHtmlFiles(root, root);

export default defineConfig({
  root,
  base: '/',
  server: {
    historyApiFallback: true,
  },
  publicDir: false,
  build: {
    outDir: 'dist-site',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        ...htmlEntries,
      },
    },
  },
});
