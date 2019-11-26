<template>
  <div class="nav_container">
    <slot name="left"></slot>
    <span class="title">{{title}}</span>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style lang="stylus" scoped>
.nav_container
  background #9933FF
  position fixed
  justify-content space-between
  display flex
  z-index 100
  left 0
  top 0
  width 100%
  height 45px
  .title
    text-align center
    flex 3
    line-height 45px
    font-size 18px
    color #ffffff
  .map
    text-align center
    line-height 45px
    flex 1
    font-size 30px
    color #ffffff
  .qrcode
    text-align center
    line-height 45px
    flex 1
    font-size 30px   
    color #ffffff     
</style>