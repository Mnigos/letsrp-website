import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home';
import Applications from '../views/Applications';
import Admin from '../views/Admin';
import Login from '../views/Login';

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
    meta: {
      adminRequired: true,
    },
  },
  {
    path: '/admin/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
