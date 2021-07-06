import { defineConfig } from 'vite';
import { resolve } from 'path';
import Legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    Legacy({
      targets: ['ie >= 11'],
    })
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        main: resolve(__dirname, 'src/pages/main/index.html'),
      },
    }
  }
});