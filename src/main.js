import App from "./App.vue";

import "./assets/main.css";

import { createApp } from "vue";
import i18n from "@/plugins/i18n/setup";

const app = createApp(App);

app.use(i18n);
app.mount("#app");
