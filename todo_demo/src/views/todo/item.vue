<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input
      type="checkbox"
      class="toggle"
      v-model="todo.completed"
    >
    <label>{{todo.content}}</label>
    <button class="destory" @click="deletedTode"></button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  components: {},
  methods: {
    deletedTode () {
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.todo-item 
  position relative
  background-color #fff
  font-size 24px
  border-bottom 1px solid rgb(0,0,0,0.06)
  &:hover
    .destory:after 
      content: 'x'



</style>
