<template>
  <div class="pane" v-show="show">        
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: [String, Number]
    },
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: true
    }
  },
  components: {},
  methods: {
    updateNav() {
      this.$parent.updateNav()
    }
  },
  watch: {
    label() {
      this.updateNav()
    }
  },
  mounted() {
    // 初始化tabs
    this.updateNav()
  },
}
</script>

<style lang="less" scoped>
</style>
