import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

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
  } else if (!localStorage.getItem('token')) {
    next({ path: '/login' })
  }
})

export default router