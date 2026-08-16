import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { readdirSync, statSync } from 'fs';
import { join, relative, resolve } from 'path';

const rootDir = resolve();

function collectHtmlEntries(dir, entries = {}) {
  for (const name of readdirSync(dir)) {
    const filePath = join(dir, name);

    if (statSync(filePath).isDirectory()) {
      if (['node_modules', 'dist', '.git'].includes(name)) continue;
      collectHtmlEntries(filePath, entries);
      continue;
    }

    if (!name.endsWith('.html')) continue;
    if (name === 'header.html' || name === 'footer.html') continue;

    const key = relative(rootDir, filePath).replace(/\\/g, '/').replace(/\.html$/, '');
    entries[key] = filePath;
  }

  return entries;
}

export default defineConfig({
  base: './', // <- Esto hace que las rutas funcionen en cualquier hosting sin depender de subcarpetas
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: collectHtmlEntries(rootDir),
    },
  },
});