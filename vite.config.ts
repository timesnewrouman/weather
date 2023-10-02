import {defineConfig} from "vite";
import vue from '@vitejs/plugin-vue';
import path from "path";
import checker from 'vite-plugin-checker';

export default defineConfig({
	base: '/weather/', // отвечает за адрес сборки, например http://127.0.0.1:4173/weather
	plugins: [
		vue(),
		checker({
			vueTsc: true,
		}),
	],
	resolve: {
		extensions: ['.js', '.ts', '.vue', '.json', '.sass'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, "src"),
		}
	},
})