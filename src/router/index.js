import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
  },
  {
    path: '/detail',
    component: () => import('../views/Detail'),
  },
  {
    path: '/add',
    component: () => import('../views/Add'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
