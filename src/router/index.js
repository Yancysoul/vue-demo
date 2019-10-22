import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path === '/login' || !to.meta.requireAuth) {
    next()
  } else if (!store.state.user.token) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router