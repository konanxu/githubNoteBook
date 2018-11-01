import Vue from 'vue'


// 非new Vue 中的 data要以function方式写，避免共用一个值
// 子组件最好不要修改props值，避免混乱
// props default对象时也应使用 function return的方式
const component = {
  props: {
    active: Boolean,
    propOne: {
      type: String,
      required: true
    }
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
      this.$emit('change')
      // this.$emit('change')  则   @change="handleChange"
    }
  },
  mounted() {
    console.log('comVue mounted')
  }
}

const component2 = {
  extend: component,
  data() {
    return {
      text: 1
    }
  }
}


// vue 的子类
// const ComVue = Vue.extend(component)


// 传入props值用propsData
// data会覆盖父类data

// /* eslint-disable no-new */
// new ComVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   mounted() {
//     console.log('instance mounted')
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#root',
  components: {
    Comp: component2
  },
  template: `<div><comp>123</comp></div>`,
  mounted() {
    // this.$parent.$options.name
    // 访问父组件属性
    console.log('ss')
  }
})
