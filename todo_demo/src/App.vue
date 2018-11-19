<template>
  <div class="page">
    <Header></Header>
    <!-- <Todo></Todo> -->
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <!-- <router-link to="/login/exact" exact>login exact</router-link> -->
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
import Header from './layout/header.vue'
export default {
  data () {
    return {}
  },
  components: {
    Footer,
    Todo,
    Header
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.test1 {
  color: red;
}
a.active-link {
  color: red
}
</style>
