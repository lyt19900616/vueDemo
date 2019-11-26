<template>
  <div class="better_container">
    <Navgation title="精品"></Navgation>
    <div class="list" v-for="(item,index) in list" :key="index">
      <div class="item" @click="goto(index)">{{item}}</div>
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
      list: ['地址选择']
    }
  },
  methods: {
    goto (index) {
      console.log(index)
     var path = '/better' + (index + 1)
      this.$router.push(path)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "../../common/stylus/common.styl"
  .better_container
    margin-top 45px
    margin-bottom 50px
    width 100%
    height 100%
    .list
      width 100%
      height 100%
      background-color #fff
      .item
        bottom-border-1px(#efefef)
        text-align center
        width 100%
        height 45px
        line-height 45px
</style>
