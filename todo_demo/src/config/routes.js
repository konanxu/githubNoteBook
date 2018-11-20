export default [
  {
    path: '/',
    redirect: '/app'
  },
  {

    // path: '/app/:qid',
    // props: true, // props 解耦
    // props: (route) => ({ id: route.query.id})
    path: '/app',
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'asafff'
    },
    beforeEnter: (to, from, next) => {
      console.log('app route before enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: () => import('../views/login/login.vue')
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
