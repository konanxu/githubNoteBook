<template>
  <div class="page">
    <Header></Header>
    <p>{{ counter }}</p>
    <p>{{ fullName }}</p>
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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
import Header from './layout/header.vue'
export default {
  data() {
    return {}
  },
  components: {
    Footer,
    Header
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },

    // ...mapState(['count']),

    // ...mapState({
    //   counter: 'count'
    // }),

    ...mapState({
      counter: state => state.count
    }),
    ...mapGetters(['fullName'])

    // fullName() {
    //   return this.$store.getters.fullName
    // }
  },
  mounted() {
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000)

    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 5000
    // })
    this.updateCountAsync({
      num: 10,
      time: 3000
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.test1 {
  color: red;
}

a.active-link {
  color: red;
}
</style>
