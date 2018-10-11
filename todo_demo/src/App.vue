<template>
  <div class="page">
    <div class="test1">1234</div>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
export default {
  data() {
    return {}
  },
  components: {
    Footer,
    Todo
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.test1 {
  color: red;
}
</style>
