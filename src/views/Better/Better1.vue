<template>
  <div class="container">
    <Navgation title="多级选择">
      <span class="map" slot="left" @click="$router.go(-1)"><i class="iconfont iconfanhui"></i></span>
      <span class="map" slot="right"></span>
    </Navgation>

    <div class="location" @click="$router.push('location')">
      <span>选择地址(3级):</span>
      <span> {{$store.state.better.address}}</span>
    </div>

    <div class="location" @click="$router.push('better2')">
      <span>测试类型(不多于5级):</span>
      <span> {{$store.state.better.testType}}</span>
    </div>
  </div>
</template>
<script>
import Navgation from '../../components/Navgation.vue'
export default {
  components: {
    Navgation
  },
  data() {
    return {
      
    }
  },
}
</script>
<style lang="stylus" scoped>
.container
  margin-top 45px
  .location
    margin-top 10px
    text-align center
    line-height 30px
    background #efefef
</style>
