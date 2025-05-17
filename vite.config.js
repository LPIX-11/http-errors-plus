import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.js',
      name: 'CCMS',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['path', 'dotenv', 'superstruct', 'undici', '@sonatel-os/json-sculpt', 'https'],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.esm.js',
          dir: 'dist',
          sourcemap: true,
        },
        {
          format: 'cjs',
          entryFileNames: 'index.cjs',
          dir: 'dist',
          sourcemap: true,
        },
      ],
    },
    sourcemap: true,
    minify: false,
  },
  plugins: [
  ],
});