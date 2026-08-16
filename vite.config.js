import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig(({ command }) => {
  return {
    // Si Vite está compilando (build) usa la ruta de GitHub. 
    // Si está en local (dev), usa la raíz normal.
    base: command === 'build' ? '/academia-conquer-blocks/' : '/',
    plugins: [injectHTML()],
  }
});