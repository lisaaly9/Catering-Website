import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import GalleryPage from "@/pages/GalleryPage.vue";

const routes = [
    {
        path: "/",
        name: HomePage,
        component: HomePage,
    },
    {
        path: "/about",
        name: AboutPage,
        component: AboutPage,
    },
    {
        path: "/gallery",
        name: GalleryPage,
        component: GalleryPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,

scrollBehavior() {
         return { top: 0};
    },
})

export default router;