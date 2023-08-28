import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue';

const initOptions = {
  url: "https://timesnewrouman.github.io/weather/",
};

// TODO частично загружается только с хардкодом /weather/img/... путей прямо в сборку

export default defineConfig({
  base: '', // отвечает за адрес сборки, например http://127.0.0.1:4173/weather
  build: {
    base: '/weather2/',
  },
  plugins: [vue()],
  server: {
    proxy: {
      "/": {
        target: initOptions.url,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, ''),
      },
    },
    cors: false,
    port: 4091,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})