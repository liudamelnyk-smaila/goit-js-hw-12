import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },

    root: 'src',
    base: '/goit-js-hw-12/',

    build: {
      sourcemap: true,
      outDir: '../dist',
      emptyOutDir: true,
    },

    css: {
      postcss: {
        plugins: [
          SortCss({
            sort: 'mobile-first',
          }),
        ],
      },
    },

    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html']),
    ],
  };
});