import Vue from 'vue'
import app from './App.vue'

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(app)
}).$mount(root)