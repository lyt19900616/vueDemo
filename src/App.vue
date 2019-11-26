<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar v-show="$route.meta.showTabbar"></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar.vue'
export default {
  components: {
    Tabbar
  }
}
</script>

<style>
.app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
