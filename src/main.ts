import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import store from "./store";
// 引入全局样式
import "@/styles/index.scss";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
