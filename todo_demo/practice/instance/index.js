import Vue from 'vue'

/* eslint-disable no-new */
const app = new Vue({
  // el: '#root',
  template: '<div>{{text}}:{{obj.a}}</div>',
  data: {
    text: 1,
    obj: {}
  }
})
app.$mount('#root')

let i = 0
setInterval(() => {
  i = i + 1
  // app.$data.text += 1
  // app.obj.a = i
  app.$set(app.obj, 'a', i) // set方式会默认reactive方式 不用forceUpdate
  // app.$delete  // 删除对象属性
  // app.$nextTick() 渲染后获取dom
  // app.$forceUpdate()
  // app.$options.data.text += 1  $options.data 和 $data 不是等同的
}, 1000)

// app.$options.render = (h) => {
//   return h('div', {}, 'new render function') // 更改render方法
// }

console.log(app.$options)
// console.log(app.$children)
// console.log(app.$scopedSlots)
// console.log(app.$slots)    插槽
// console.log(app.$refs)
// console.log(app.$isServer) 服务端渲染使用

const unWatch = app.$watch('text', (newText, oldText) => {
  console.log('$(newText) : $(oldText)')
})
unWatch() // 手动销毁   放入实例会自动销毁


app.$on('test', () => {
  console.log('test emited')
})

app.$emit('test')

app.$once() // 只执行1次

// app.$forceUpdate   // 刷新渲染
