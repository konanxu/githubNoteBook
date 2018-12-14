<script>
import TabContainer from './tab-container.vue'
export default {
  name: 'Tabs',
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      panes: []
    }
  },
  components: {
    TabContainer
  },
  render() {
    // const contents = this.panes.map(pane => {
    //   return pane.active ? pane.$slots.default : null
    // })
// // <tab-container panes={this.panes} />
// <div class="tab-content">{contents}</div>
    return (
      <div class="tabs">
        <ul class="tabs-header">{this.$slots.default}</ul>
        <tab-container panes={this.panes}></tab-container>
      </div>
    )
  },

  methods: {
    onChange(index) {
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tabs ul
  display flex
  flex-direction row
</style>

