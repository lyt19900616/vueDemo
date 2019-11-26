import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/home1',
    name: 'home1',
    component: () => import('../views/Home/Home1.vue')
  },
  {
    path: '/home18',
    name: 'home18',
    component: () => import('../views/Home/Home18.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/Vuex/Vuex.vue'),
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/better',
    name: 'better',
    component: () => import('../views/Better/Better.vue'),
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/better1',
    name: 'better1',
    component: () => import('../views/Better/Better1.vue')
  },
  {
    path: '/better2',
    name: 'better2',
    component: () => import('../views/Better/Better2.vue')
  },
  {
    path: '/location',
    name: 'location',
    component: () => import('../views/Better/Location.vue')
  },
  {
    path: '/other',
    name: 'other',
    component: () => import('../views/Other/Other.vue'),
    meta: {
      showTabbar: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
