import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const NotFound = () => import('../components/NotFound.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'error',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((from, to, next) => {
  next()
})

export default router
