import Vue from 'vue'

/**
 * 具名插槽 slot='header'
 * 作用域插槽 slot-scope="props"
 * ref 标签
 * 跨级组件使用  provide 、 inject 引用组件方 默认情况下不会再渲染 使用Object.defineProperty解决
 * vue官方不推荐
 *
 */

const ChildComponent = {
  template: `<div>child components: {{data.value}}</div>`,
  inject: ['yeye', 'data'],
  mounted() {
    // console.log(this.$parent.$options.name)
    console.log(this.yeye, this.value)
  }
}

const component2 = {
  name: 'comp',
  components: {
    ChildComponent
  },
  data() {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  },
  template: `
    <div :style="style">
      <slot value="456"></slot>
      <div class='header'>
        <slot name='header'></slot>
      </div>
      <div class='body'>
        <slot name='body'></slot>
      </div>
      <child-component/>
    </div>
  `
}

/* eslint-disable no-new */
new Vue({
  provide() {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumberable: true
    })
    return {
      yeye: this,
      data
  }
  },
  el: '#root',
  data() {
    return {
      value: '123'
    }
  },
  mounted() {
    // console.log(this.$refs.comp + '\n' + this.$refs.span)
  },
  components: {
    Comp: component2
  },
  // template: `<div><comp :value='value' @input='value = arguments[0]'>123</comp></div>`
  template: `
  <div>
  <comp ref="comp">这里是插槽，组件中若不定义则不显示
    <span slot-scope="props" ref="span">{{props.value}}</span>
    <span slot='header'>header</span>
    <span slot='body'>body</span>
  </comp>
  <input v-model="value" />
  </div>`
})
