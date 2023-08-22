import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import NaiveUI from "naive-ui";
import i18n from "./i18n";
import App from "./App.vue";
import "./permission";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(NaiveUI);
app.use(i18n);
app.mount("#app");
