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

function injectBaseTag(base) {
  return {
    name: 'inject-base-tag',
    transformIndexHtml(html) {
      if (html.includes('<base ')) return html;
      return html.replace('<head>', `<head>\n    <base href="${base}">`);
    },
  };
}

function rewriteRootAbsoluteUrls(base) {
  return {
    name: 'rewrite-root-absolute-urls',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        if (base === '/') return html;

        return html
          .replace(/href="\/(?!\/)([^"#?]*?)"/g, (_, path) => `href="${base}${path}"`)
          .replace(/src="\/(?!\/)([^"#?]*?)"/g, (_, path) => `src="${base}${path}"`);
      },
    },
  };
}

export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/academia-conquer-blocks/' : '/';

  return {
    base,
    plugins: [injectHTML(), injectBaseTag(base), rewriteRootAbsoluteUrls(base)],
    build: {
      rollupOptions: {
        input: collectHtmlEntries(rootDir),
      },
    },
  };
});
