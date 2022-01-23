import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import GlobalComponents from "./components";
import Router from "./router";
import FontAwesome from "./assets/fontAwesome";
import VeeValidate from "./assets/veeValidate";
import "./assets/style.css";
import "animate.css";

const app = createApp(App);
app.use(createPinia());
app.use(GlobalComponents);
app.use(Router);
app.use(FontAwesome);
app.use(VeeValidate);
app.mount("#app");
