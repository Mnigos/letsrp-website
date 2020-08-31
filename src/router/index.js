import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Applications from '../views/Applications.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Applications',
    name: 'Applications',
    component: Applications,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
