import { defineConfig } from 'vite';

import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        main: resolve(__dirname, 'src/pages/main/index.html'),
      },
    }
  }
});