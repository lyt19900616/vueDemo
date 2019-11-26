<template>
  <div class="tabbar_container">
    <div class="tabbar_item" :class="{on: $route.path === '/home'}" @click="goto('/home')">
      <span class="item_icon"><i class="iconfont iconheitaobiaoji"></i></span>
      <span>黑桃K</span>
    </div>
    <div class="tabbar_item" :class="{on: $route.path === '/vuex'}" @click="goto('/vuex')">
      <span class="item_icon"><i class="iconfont iconhongxin"></i></span>
      <span>红心K</span>
    </div>
    <div class="tabbar_item" :class="{on: $route.path === '/better'}" @click="goto('/better')">
      <span class="item_icon"><i class="iconfont iconpoker-plum"></i></span>
      <span>梅花K</span>
    </div>
    <div class="tabbar_item" :class="{on: $route.path === '/other'}" @click="goto('/other')">
      <span class="item_icon"><i class="iconfont iconpoker-square"></i></span>
      <span>方块K</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "../common/stylus/common.styl"
.tabbar_container
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .tabbar_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color $pruple
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
