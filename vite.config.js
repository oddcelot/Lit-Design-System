import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'LitDS',
      formats: ['es', 'iife'],
      fileName: (format) => `_ds_bundle.${format === 'es' ? 'mjs' : 'js'}`,
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
