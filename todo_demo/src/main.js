import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './assets/styles/global.styl'

// const root = document.createElement('div')
// document.body.appendChild(root)

import createRouter from './config/router'

Vue.use(VueRouter)
const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
