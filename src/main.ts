import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import GlobalComponents from "./components";
import Router from "./router";
import "./assets/tailwind.css";

const app = createApp(App);
app.use(createPinia());
app.use(GlobalComponents);
app.use(Router);
app.mount("#app");
