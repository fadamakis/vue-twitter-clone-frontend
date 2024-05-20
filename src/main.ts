import { createApp } from "vue";
import "./ui/styles/main.scss";
import App from "./App.vue";
import router from "@/router";
import { Vue3Mq } from "vue3-mq";
import { useAuth } from "@/features/auth";

useAuth().initializeUserSession();

const app = createApp(App);

app.use(Vue3Mq);
app.use(router);

app.mount("#app");
