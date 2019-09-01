export default [
  {
    path: '/',
    name: 'home',
    models: () => [import('../models/topics')],
    component: () => import('../routes/Topics')
  },
  {
    path: '/topic/:id',
    name: 'detail',
    models: () => [import('../models/topics')],
    component: () => import('../routes/Topic')
  },
  {
    path: '/login',
    name: 'login',
    models: () => [import('../models/login')],
    component: () => import('../routes/Login/index')
  }
]