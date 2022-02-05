import { createRouter, createWebHistory } from "vue-router";

const Home = import("../pages/Home.vue");
const Shelf = () => import("../pages/Shelf.vue");
// const ShelfDetails = () => import("../pages/ShelfDetails.vue");
const Works = () => import("../pages/Works.vue");

const NotFound = () => import("../components/404.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/shelf/", component: Shelf },
  // { path: "/shelf/:id", component: ShelfDetails },
  { path: "/works", component: Works },
  {
    // will match everything
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
