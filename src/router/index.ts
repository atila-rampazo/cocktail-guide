import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import("@/layouts/DefaultTemplate.vue"),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
