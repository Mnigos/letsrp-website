import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home';
import Applications from '../views/Applications';
import Admin from '../views/Admin';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/applications',
    name: 'Applications',
    component: Applications,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
