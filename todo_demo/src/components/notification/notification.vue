<template>
  <transition name='fade' @after-leave="afterLeave" @after-enter="afterEnter">
    <div class="notification" :style='style' v-show="visible">
      <span class="content">{{content}}</span>
      <a
        class="btn"
        @click="handClose"
      >{{ btn }}</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  data() {
    return {
      visible: true,
      autoClose: 3000
    }
  },
  methods: {
    handClose(e) {
      e.preventDefault()
      this.$emit('close')
    },
    afterLeave() {
      this.$emit('closed')
    },
    afterEnter() {}
  },
  computed: {
    style () {
      return {}
    }
  }
}
</script>

<style lang='stylus' scoped>
.notification {
  display: flex;
  background-color: #303030;
  color: rgba(255, 255, 255, 1);
  align-items: center;
  padding: 20px;
  position: fixed;
  min-width: 280px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2);
  flex-wrap: wrap;
  transition: all 0.3s;
}

.content {
  padding: 0;
}

.btn {
  color: #ff4081;
  padding-left: 24px;
  margin-left: auto;
  cursor: pointer;
}
</style>
