import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import MenuPage from "@/pages/MenuPage.vue";
import GalleryPage from "@/pages/GalleryPage.vue";
import ContactPage from "@/pages/ContactPage.vue";

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
        path: "/menu",
        name: MenuPage,
        component: MenuPage,
    },
    {
        path: "/gallery",
        name: GalleryPage,
        component: GalleryPage,
    },
    {
        path: "/contact",
        name: ContactPage,
        component: ContactPage,
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,

scrollBehavior() {
         return { top: 0};
    },
})

export default router;