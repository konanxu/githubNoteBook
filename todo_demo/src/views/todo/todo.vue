<template>
  <div class="real-app">
    <input type="text"
    class="add-input"
    autofocus="autofocus"
    placeholder="接下来要做点什么"
    @keyup.enter="addTodo">
    <Item v-for="(todo,index) in filteredTodos" :todo="todo" :key="index" @del="deleteItem"/>
    <Tabs :filter="filter" :todos="todos" @toggle="toggle" @clearAllCompleted="clearAllCompleted"></Tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import Item from './item.vue'
import Tabs from './tabs.vue'

export default {
  data() {
    return {
      todos: [],
      filter: 'all',
      id: 0
    }
  },
  components: {
    Item,
    Tabs
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
    deleteItem(id){
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggle(state) {
      this.filter = state
    },
    clearAllCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
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
.real-app {
  width 600px
  margin 0 auto 
  box-shadow 0 0 5px #666
}
.add-input 
  position relative
  margin 0
  width 100%
  font-size 24px
  
.test22 {
  border: 1px soli yellow;
  background-color: red;
  box-sizing border-box
  padding 16px 16px 16p 64px
  box-shadow inset 0 -2px 1px rgba(0,0,0,0.3)
  line-height 1.4em
}
</style>
