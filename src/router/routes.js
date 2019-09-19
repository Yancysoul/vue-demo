const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      title: '登录',
      requireAuth: false
    }
  }, {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/register'),
    meta: {
      title: '注册',
      requireAuth: false
    }
  }, {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout'),
    meta: {
      title: '首页',
      requireAuth: true
    }
  }
]

export default routes