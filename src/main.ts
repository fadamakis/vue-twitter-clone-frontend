import { createApp } from "vue";
import "./assets/styles/main.scss";
import App from "./App.vue";
import router from "@/router";
import { Vue3Mq } from "vue3-mq";
import { useAuth } from "@/features/auth";

await useAuth().initializeUserSession();

const app = createApp(App);

app.use(Vue3Mq);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
