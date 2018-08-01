import base from './css/base.css'
import common from './css/common.css'

var app = document.getElementById('app')
app.innerHTML = '<div class="'+ base.box +'"></div>'

// 动态异步加载
import(/* webpackChunkName: 'a' */ './components/a').then(a =>{
  console.log(a)
})