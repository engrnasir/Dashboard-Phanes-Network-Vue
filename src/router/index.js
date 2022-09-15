import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import LiquidityLocker from '../views/LiquidityLocker.vue'

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: Index
  },
  {
    path: '/liquidityLocker',
    name: 'LiquidityLockerView',
    component: LiquidityLocker
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
