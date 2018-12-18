<template>
<div id="app">
  <transition name="router-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
import 'lib-flexible'

export default {
  name: 'app',
}
</script>

<style lang="stylus">
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
