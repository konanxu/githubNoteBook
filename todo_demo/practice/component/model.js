import Vue from 'vue'

/**
 * vue-model 实现机制
 *
 * 组件内部v-model添加 props value  $emit 提交input事件
 *
 * 自定义v-model内部 使用 model
 *
 * 自定义组件实现双向绑定
 */

const component2 = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: {
    value: String
  },
  data() {
    return {
      text: 1
    }
  },
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value"/>
    </div>
  `,
  methods: {
    handleInput(e) {
      console.log(e.target.value)
      this.$emit('input', e.target.value)
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#root',
  data() {
    return {
      value: '123'
    }
  },
  components: {
    Comp: component2
  },
  // template: `<div><comp :value='value' @input='value = arguments[0]'>123</comp></div>`
  template: `<div><comp v-model='value'>123</comp></div>`
})

// $emit 传值会放入arguments数组中
