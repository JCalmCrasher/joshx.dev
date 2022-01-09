import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../pages/Home.vue');
const Shelf = () => import('../pages/Shelf.vue');
const Works = () => import('../pages/Works.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/shelf', component: Shelf },
  { path: '/works', component: Works },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

export default router;