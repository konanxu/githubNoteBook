import Vue from 'vue'


// 非new Vue 中的 data要以function方式写，避免共用一个值
// 子组件最好不要修改props值，避免混乱
// props default对象时也应使用 function return的方式
const component = {
  props: {
    active: {
      type: Boolean,
      default: true,
      validator(value) {
        return typeof value === 'boolean'
      }
    },
    propOne: String,
    onChange: Function
  },
  template: `
  <div>
  This is component 局部
  <span @click="handleChange">{{propOne}}</span>
  <div v-show="active">{{active}}</div>
  </div>`,
  data () {
    return {
      text: '123'
    }
  },
  methods: {
    handleChange() {
      this.onChange()
      // this.$emit('change')  则   @change="handleChange"
    }
  }
}
// 全局注册
// Vue.component('CompOne', component)

/* eslint-disable no-new */
new Vue({
  // 局部注册
  components: {
    CompOne: component
  },
  data: {
    prop1: 'text1'
  },
  methods: {
    handleChange() {
      this.prop1 += 1
    }
  },
  el: '#root',
  template: `<div>
  <comp-one :active="true" :on-change="handleChange" :propOne="prop1"></comp-one>
  <comp-one :active="false"></comp-one>
  <div style="border: 1px solid black;">1</div>
  </div>

  `
  // 若不是 v-bind(:)方式传递 则vue会以字符串形式传入值
})
