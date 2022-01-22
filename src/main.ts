import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import GlobalComponents from "./components";
import Router from "./router";
import i18n from "./locales";
import VeeValidate from "./assets/veeValidate";
import FontAwesome from "./assets/fontAwesome";
import "./assets/style.css";
import "animate.css";

const app = createApp(App);
app.use(createPinia());
app.use(GlobalComponents);
app.use(Router);
app.use(i18n);
app.use(VeeValidate);
app.use(FontAwesome);
app.mount("#app");
