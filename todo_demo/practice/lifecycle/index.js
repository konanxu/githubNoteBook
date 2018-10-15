import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  // template: '<div>lifecycle</div>',
  data: {
    text: 'aaa'
  },
  beforeCreate() {
    console.log(this, 'beforeCreate')
  },
  created() {
    console.log(this, 'created')
  },
  beforeMount() {
    console.log(this, 'beforeMount')
  },
  mounted() {
    console.log(this, 'mounted')
  },
  beforeUpdate() {
    console.log(this, 'beforeUpdate')
  },
  updated() {
    console.log(this, 'updated')
  },
  activated() {
    console.log(this, 'activated') // 组件keepalive 会使用
  },
  deactivated() {
    console.log(this, 'deactivated')
  },
  beforeDestroy() {
    console.log(this, 'beforeDestroy')
  },
  destroyed() {
    console.log(this, 'destroyed')
  },
  render(h) { // render 代替template  vue-loader会帮我们吧template转换为render方法里
    console.log(this, 'render')
    return h('div', {}, this.text)
  },
  renderError(h, err) { // 只监听当前组件
    return h('div', {}, err.stack)
  },
  errorCaptured() {} // 会冒泡捕获错误,正式环境可使用
})
