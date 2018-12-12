<template>
  <div class="page">
    <Header></Header>
    <!-- <p>{{ counter }}</p>
    <p>{{ fullName }}</p>
    <p>textA: {{ textA }}</p>
    <p>{{ textPlus }}</p>
    <p>textC {{ textC }}</p> -->
    <!-- <Todo></Todo> -->
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <!-- <router-link to="/login/exact" exact>login exact</router-link> -->

    <transition name="fade">
      <router-view />
    </transition>
    <!-- <notification content='text notify'></notification> -->
    <button @click="notify">click me</button>
    <Footer></Footer>
    <!-- <router-view name='a'/>  route 配置 components: {default: xx, a: yy} -->
  </div>
</template>

<script type="text/ecmascript-6">
// import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
import Header from './layout/header.vue'
export default {
  metaInfo: {
    title: "konan's app"
  },
  data() {
    return {}
  },
  components: {
    Footer,
    Header
  },
  methods: {
    // ...mapActions(['updateCountAsync', 'a/add']),
    // ...mapMutations(['updateCount', 'a/updateText'])
    notify() {
      this.$notify({
        content: 'text $notify',
        btn: 'close'
      })
    }
  },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    // ...mapState(['count']),
    // ...mapState({
    //   counter: 'count'
    // }),
    // ...mapState({
    //   counter: state => state.count,
    //   textA: state => state.a.text,
    //   textC: state => state.c.text
    // }),
    // ...mapGetters({
    //   fullName: 'fullName',
    //   textPlus: 'a/textPlus'
    // })
    // fullName() {
    //   return this.$store.getters.fullName
    // }
  },
  mounted() {
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000)

    // const handle = this.$store.watch(
    //   state => state.count,
    //   (newCount) => {
    //     // console.log('newCount watch', newCount)
    //   }
    // )
    // setTimeout(() => {
    //   handle()
    // }, 5000)

    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 5000
    // })
    // this.updateCountAsync({
    //   num: 10,
    //   time: 3000
    // })
    // this['a/updateText']('23333')
    // this['a/add']()
    this.$notify({
      content: 'test $notify',
      btn: 'close'
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.test1
  color red
a.active-link
  color red
</style>
