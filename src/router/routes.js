const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      title: '登录',
      requireAuth: false
    }
  }
]

export default routes