import { route } from 'quasar/wrappers';
import {
    createMemoryHistory,
    createRouter,
    createWebHashHistory,
    createWebHistory,
} from 'vue-router';

import routes from './routes';
import { useAppStore } from 'src/stores/app-store';
import { Tools } from 'src/models/Tools';
import { mdiRulerSquareCompass } from '@quasar/extras/mdi-v7';
import { useMeta } from 'quasar';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
    const createHistory = process.env.SERVER
        ? createMemoryHistory
        : process.env.VUE_ROUTER_MODE === 'history'
        ? createWebHistory
        : createWebHashHistory;

    const Router = createRouter({
        scrollBehavior: () => ({ left: 0, top: 0 }),
        routes,

        // Leave this as is and make changes in quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        history: createHistory(process.env.VUE_ROUTER_BASE),
    });

    Router.afterEach((to) => {
        const appStore = useAppStore();
        const tools = Tools();

        const tool = tools.find((t) => t.href === to.path);
        const appTitle = appStore.$t('app_title');
        if (tool) {
            appStore.title = `${tool.label} - ${appTitle}`;
            appStore.icon = tool.icon;
        } else {
            appStore.title = appTitle;
            appStore.icon = mdiRulerSquareCompass;
        }
        useMeta({ title: appStore.title });
    });

    return Router;
});
