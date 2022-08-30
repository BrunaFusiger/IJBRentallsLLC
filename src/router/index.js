import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/apartaments',
    name: 'apartaments',
    component: () => import(/* webpackChunkName: "apartaments" */ '../views/Apartaments.vue')
  },
  {
    path: '/administrator',
    name: 'administrator',
    component: () => import(/* webpackChunkName: "administrator" */ '../views/Administrator.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
