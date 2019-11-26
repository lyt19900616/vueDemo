<template>
  <div class="home_container">
    <Navgation title="菜鸟教程">
      <span class="map" slot="left"><i class="iconfont iconditu"></i></span>
      <span class="qrcode" slot="right"><i class="iconfont iconico"></i></span>
    </Navgation>
    <div class="list" v-for="(item,index) in list" :key="index">
      <div class="item" @click="goto(index)">{{item}}</div>
    </div>
  </div>
</template>
<script>
import Navgation from '../../components/Navgation.vue'
export default {
  data() {
    return {
      list: ['模板语法','条件语句','循环语句','计算属性','监听属性','样式绑定','事件处理器','表单','组件','自定义指令','路由','过渡&动画','混入','Ajax(axios)','Ajax(vue-resource)','响应接口','实例','生命周期']
    }
  },
  methods: {
    goto (index) {
      console.log(index)
     var path = '/home' + (index + 1)
      this.$router.push(path)
    }
  },
  components: {
    Navgation
  }
}
</script>
<style lang="stylus" scoped>
@import "../../common/stylus/common.styl"
  .home_container
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
