import { createApp } from "vue";
import "./assets/styles/main.scss";
import App from "./App.vue";
import router from "@/router";
import { Vue3Mq } from "vue3-mq";

const app = createApp(App);

app.use(Vue3Mq);
app.use(router);
app.mount("#app");
