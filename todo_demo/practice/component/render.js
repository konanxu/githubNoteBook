import Vue from 'vue'

/**
 * nativeOn 若是组件则 绑定到根节点dom上  原生则直接绑定
 * domProps 会替换createElement 第三个参数值
 */


const component2 = {
  name: 'comp',
  props: ['props1'],
  data() {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  },
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `
  render(createElement) {
    return createElement('div', {
      style: this.style,
      on: {
        click: () => {
          // this.$emit('click')
        }
      }
    }, [
      this.$slots.default,
      this.props1
    ])
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
  mounted() {
    // console.log(this.$refs.comp + '\n' + this.$refs.span)
  },
  components: {
    Comp: component2
  },
  methods: {
    handleClick() {
      console.log('clicked')
    }
  },
  // template: `
  // <div>
  //   <comp ref="comp"><span>{{value}}</span></comp>
  // </div>`
  render(createElement) {
    return createElement('comp', {
      ref: 'comp',
      props: {
        props1: this.value
      },
      // on: {
      //   click: this.handleClick
      // }
      nativeOn: {
        click: this.handleClick
      }
    }, [
      createElement('span', { ref: 'span',
      domProps: {
        innerHTML: '<span>innerHTML</span>'
      },
      attrs: {
        id: 'test-id'
      }
    }, this.value)
    ])
  }
})
