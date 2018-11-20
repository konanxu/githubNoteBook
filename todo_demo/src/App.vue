<template>
  <div class="page">
    <Header></Header>
    <p>{{ count }}</p>
    <!-- <Todo></Todo> -->
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <!-- <router-link to="/login/exact" exact>login exact</router-link> -->
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>
    <!-- <router-view name='a'/>  route 配置 components: {default: xx, a: yy} -->
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
import Header from './layout/header.vue'
export default {
  data () {
    return {}
  },
  components: {
    Footer,
    Header
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  mounted() {
    let i = 1
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 1000)
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
