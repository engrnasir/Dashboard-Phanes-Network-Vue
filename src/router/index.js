import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import LiquidityLocker from '../views/LiquidityLocker.vue'
import TokenLocker from '../views/TokenLocker.vue'
import TokenMinter from '../views/TokenMinter.vue'
import Staking from '../views/Staking.vue'

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
  {
    path: '/tokenLocker',
    name: 'TokenLockerView',
    component: TokenLocker
  },
  {
    path: '/tokenMinter',
    name: 'TokenMinterView',
    component: TokenMinter
  },
  {
    path: '/staking',
    name: 'StakingView',
    component: Staking
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
