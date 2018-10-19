import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  template: `<div>
  <p> name:{{name}}</p>
  <p> name:{{getName()}}</p>
  <p> name:{{number}}</p>

  <p> firstName: {{firstName}}</p>
  <p><input type="text" v-model="firstName"/></p>
  <p><input type="text" v-model="number"/></p>

  <p>name :<input type="text" v-model="name"/></p>

  <p><input type="text" v-model="obj.a"/></p>
  </div>`,
  data: {
    firstName: 'Konan',
    lastName: 'Xu',
    number: 0,
    obj: {
      a: 123
    }
  },
  computed: {
    // computed 有缓存 重新渲染 性能更高
    name: {
      get() {
        console.log('computed')
        return this.firstName + ' ' + this.lastName
      },
      set(name) {
        // 一般不用
        let names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    firstName(newName, oldName) {
      console.log(newName + oldName)
    },
    lastName: {
      handler(newName, oldName) {
        console.log(newName + oldName)
      },
      immediate: true // 立即执行handler
    },
    obj: {
      handler() {
        console.log('obj change')
      },
      immediate: true
      // deep: true // 监听对象每个值
    },
    'obj.a': {
      handler() {
        console.log('obj.a changed')
      }
    }
  },
  methods: {
    getName() {
      console.log('methods')
      return this.firstName + this.lastName
    }
  }
})
