<template>
  <div>
    <Navgation title="生命周期">
      <span class="map" slot="left" @click="$router.go(-1)"><i class="iconfont iconfanhui"></i></span>
      <span class="map" slot="right"></span>
    </Navgation>
    <h1 style="margin: 45px 10px 10px 0px">{{msg}}</h1>
    <keep-alive>
      <my-components msg="hello word" v-if="show"></my-components>
    </keep-alive>
  </div>
</template>
<script>
import Navgation from '../../components/Navgation.vue'
 var child = {
    template: '<div>from child: {{msg}}</div>',
    props: ['msg'],
    data() {
      return {
        childMsg: 'child'
      }
    },
    deactivated() {
      console.log('component deactived!')
      
    },
    activated() {
      console.log('component actived')
      
    }
  }
export default {
  components: {
    Navgation,
    'my-components': child
  },
  data() {
    return {
      msg: 'father',
      show: true
    }
  },
  beforeCreate() {
    console.group('beforeCreate ------ 创建前状态')
    var state = {
      'el': this.$sel,
      'data': this.$data,
      'msg': this.msg
    }
    console.log(state)
    console.groupEnd()
  },
  created() {
    console.group('created ------ 创建完成状态')
    var state = {
      'el': this.$sel,
      'data': this.$data,
      'msg': this.msg
    }
    console.log(state)
    console.groupEnd()    
  },
  beforeMount() {
    console.group('beforeMount ------ 挂载前状态')
    var state = {
      'el': this.$sel,
      'data': this.$data,
      'msg': this.msg
    }
    console.log(state)
    console.groupEnd()     
  },
  mounted() {
    console.group('mounted ------ 挂载完成状态')
    var state = {
      'el': this.$sel,
      'data': this.$data,
      'msg': this.msg
    }
    console.log(state)
    console.groupEnd()    
  },
  beforeUpdate() {
    console.group('beforeUpdate ------ 更新前状态')
    var state = {
      'el': this.$sel,
      'data': this.$data,
      'msg': this.msg
    }
    console.log(state)
    console.groupEnd()      
  },
  updated() {
    console.group('updated ------ 更新完成状态')
    var state = {
      'el': this.$sel,
      'data': this.$data,
      'msg': this.msg
    }
    console.log(state)
    console.groupEnd()     
  },
  beforeDestroy() {
    console.group('beforeDestory ------ 销毁前状态')
    var state = {
      'el': this.$sel,
      'data': this.$data,
      'msg': this.msg
    }
    console.log(state)
    console.groupEnd()     
  },
  destroyed() {
    console.group('destory ------ 销毁完成状态')
    var state = {
      'el': this.$sel,
      'data': this.$data,
      'msg': this.msg
    }
    console.log(state)
    console.groupEnd()     
  },
}
</script>
<style lang="stylus" scoped>

</style>
