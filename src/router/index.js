import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/admin/home',
      name: 'adminhome',
      component: () => import('../views/AdminHomeView.vue'),
    },
    {
      path: '/create/:type/:id',
      name: 'create',
      component: () => import('../views/CreateView.vue'),
    },
    {
      path: '/update/:type/:id',
      name: 'update',
      component: () => import('../views/UpdateView.vue'),
    },
    {
      path: '/delete/:type/:id',
      name: 'delete',
      component: () => import('../views/DeleteView.vue'),
    },
  ],
})

export default router
