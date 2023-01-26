import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SubViewLeaveGuard from '../views/SubViewLeaveGuard.vue'
import SubViewNormal from '../views/SubViewNormal.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: 'leave-guard',
          component: SubViewLeaveGuard,
        },
        {
          path: 'normal',
          component: SubViewNormal,
        }
      ]
    }
  ]
})

export default router
