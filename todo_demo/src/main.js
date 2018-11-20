import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store.js'

// const root = document.createElement('div')
// document.body.appendChild(root)

Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()


router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next('/login')
  // } else {
  //   next()
  // }
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
