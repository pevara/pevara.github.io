import ConversionPage from 'src/pages/ConversionPage.vue';
import ErrorNotFound from 'src/pages/ErrorNotFound.vue';
import IndexPage from 'src/pages/IndexPage.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: IndexPage },
            {
                path: '/conversion',
                component: ConversionPage,
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: ErrorNotFound,
    },
];

export default routes;
