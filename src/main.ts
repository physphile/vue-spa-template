import { createApp } from "vue";
import "./styles/reset.css";
import "./styles/style.css";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import { routes } from "./routes/main";

createApp(App)
	.use(createPinia())
	.use(
		createRouter({
			history: createWebHistory(),
			routes,
		})
	)
	.mount("#app");
