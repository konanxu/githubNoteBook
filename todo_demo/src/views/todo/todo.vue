<template>
  <div class="real-app">
    <div class="tab-container">
      <tabs :value="tabValue" @change='handleChange'>
        <tab index="1" label="tab1">
          <span>content 1 {{inputContent}}</span>
        </tab>
        <tab index="2">
          <span slot="label" style="color:red;">tab2</span>
          <span>content 2 </span>
        </tab>
        <tab index="3" label="tab3">
          <span>content 3</span>
        </tab>
      </tabs>
    </div>
    <p>{{inputContent}}</p>
    <input
      @keyup.enter="addTodo"
      autofocus="autofocus"
      class="add-input"
      placeholder="接下来要做点什么"
      type="text"
      v-model="inputContent"
    >
    <Item :key="index" :todo="todo" @del="deleteItem" v-for="(todo,index) in filteredTodos"/>
    <helper :filter="filter" :todos="todos" @clearAllCompleted="clearAllCompleted" @toggle="toggle"></helper>
  </div>
</template>

<script type="text/ecmascript-6">
import Item from './item.vue'
import Helper from './tabs.vue'

export default {
  beforeRouteEnter(to, from, next) {
    console.log('todo before enter')
    next(vm => {
      console.log('after enter vm.id is ', vm.id)
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log('todo before update')
    next()
    // 同种路由参数不一样时 使用，相较watch 减少开销
  },
  beforeRouteLeave(to, from, next) {
    console.log('todo before leave')
    if (global.confirm('are you ok?')) {
      next()
    }
  },

  props: ['qid'],
  mounted() {
    console.log(this.qid)
  },
  data() {
    return {
      todos: [],
      filter: 'all',
      id: 0,
      tabValue: '1',
      inputContent: ''
    }
  },
  components: {
    Item,
    Helper
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: this.id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteItem(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggle(state) {
      this.filter = state
    },
    clearAllCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    handleChange(index) {
      this.tabValue = index
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.real-app
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
  .add-input
    position relative
    margin 0
    width 100%
    font-size 24px
    // .test22
    // border 1px soli yellow
    // background-color red
    // box-sizing border-box
    // padding 16px 16px 16p 64px
    // box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.3)
    // line-height 1.4em
  .tab-container
    background-color #fff
    padding 0 10px
</style>
