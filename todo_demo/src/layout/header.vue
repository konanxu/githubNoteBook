<template>
  <div :class="$style.mainHeader">
    <span>{{title}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      title: 'TodoList'
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" module>
.main-header
  margin 30px auto
  width 600px
  text-align center
 span 
  font-size 34px
  color rgb(111,111,111)
</style>
