import { defineConfig } from "vite";
import { resolve } from "path";
import Legacy from "@vitejs/plugin-legacy";
import Handlebars from 'vite-plugin-handlebars';
import { pagesVariableConfig } from './src/pages/config';
import { defineHtmlTagConfig } from "./plugins/vite-plugin-html-config";


export default defineConfig({
  plugins: [
    Legacy({
      targets: ["ie >= 11"],
    }),
    Handlebars({
      context: pagesVariableConfig
    }),
    defineHtmlTagConfig({
      links: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg"
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, "src")
    }
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        main: resolve(__dirname, "src/pages/main/index.html"),
      },
    },
  },
});
