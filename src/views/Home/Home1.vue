<template>
  <div>
    <Navgation title="模板语法">
      <span class="map" slot="left" @click="$router.go(-1)"><i class="iconfont iconfanhui"></i></span>
      <span class="map" slot="right"></span>
    </Navgation>
    
  </div>
</template>
<script>
import Navgation from '../../components/Navgation.vue'
export default {
  components: {
    Navgation
  }
}
</script>
<style lang="stylus" scoped>

</style>
