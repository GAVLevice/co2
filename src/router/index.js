import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },

    {
      path: '/o-nas',
      name: 'about-us',
      component: () => import('../views/AboutUsView.vue'),
    },

    {
      path: '/sluzby',
      name: 'service',
      component: () => import('../views/ServiceView.vue'),
    },

    {
      path: '/smartfony',
      name: 'smartphones',
      component: () => import('../views/SmartphoneView.vue'),
    },
  ],
})

export default router
