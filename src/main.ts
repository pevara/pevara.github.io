import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createPinia } from "pinia";
import { createHead } from "@unhead/vue";

const pinia = createPinia();
const head = createHead();

createApp(App)
    .use(pinia)
    .use(router)
    .use(head)
    .mount("#app");
