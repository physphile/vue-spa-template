import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
	plugins: [vue(), svgLoader()],
	css: {
		postcss: {
			plugins: [
				postcssPresetEnv({
					features: {
						"nesting-rules": true,
					},
				}),
			],
		},
	},
});
