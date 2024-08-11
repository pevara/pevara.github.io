import {createApp} from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import {createPinia} from "pinia";
import {createHead} from "@unhead/vue";
import {createI18n} from 'vue-i18n'

const pinia = createPinia();
const head = createHead();
const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en: {},
      nl: {}
    }
})

createApp(App)
    .use(pinia)
    .use(router)
    .use(head)
    .use(i18n)
    .mount("#app");
