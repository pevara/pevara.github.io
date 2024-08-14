import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PrivacyView from "@/views/PrivacyView.vue";
import SettingsView from "@/views/SettingsView.vue";
import TriangleView from "@/views/TriangleView.vue";
import ConversionView from "@/views/ConversionView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		component: AboutView,
	},
	{
		path: "/privacy",
		name: "privacy",
		component: PrivacyView,
	},
	{
		path: "/settings",
		name: "settings",
		component: SettingsView,
	},
	{
		path: "/triangles",
		name: "triangles",
		component: TriangleView,
	},
	{
        path: '/conversion',
        name: 'conversion',
        component: ConversionView
    },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
