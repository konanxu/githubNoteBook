export default [
  {
    path: '/app',
    component: () => require('../views/todo/todo.vue')
  },
  {
    path: '/login',
    component: () => require('../views/login.vue')
  }
]
