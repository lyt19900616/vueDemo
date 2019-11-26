<template>
  <div class="container">
    <Navgation title="类型选择">
      <span class="map" slot="left" @click="$router.go(-1)"><i class="iconfont iconfanhui"></i></span>
      <span class="map" slot="right"></span>
    </Navgation>
    <div class="address">
        <section class="title">
          <div class="area" @click="firstLeve()" :class="firstTitle?'':'active'">{{firstTitle?firstTitle:'请选择'}}</div>
          <div class="area" @click="secondLeve()" v-show="this.showSecondList.length > 0" :class="secondTitle?'':'active'">{{secondTitle?secondTitle:'请选择'}}</div>
          <div class="area" @click="thirdLeve()" v-show="this.showThirdList.length > 0" :class="thirdTitle?'':'active'">{{thirdTitle?thirdTitle:'请选择'}}</div>
          <div class="area" @click="fourthLeve()" v-show="this.showFourthList.length > 0" :class="fourthTitle?'':'active'">{{fourthTitle?fourthTitle:'请选择'}}</div>
          <div class="area" @click="fifthLeve()" v-show="this.showFifthList.length > 0" :class="fifthTitle?'':'active'">{{fifthTitle?fifthTitle:'请选择'}}</div>
        </section>
        <ul>
          <li class="addList clearfix" v-for="item in showFirstList" :key="item.value" @click="getFirstName(item)" v-show="showFirst">
            <div>{{item.label}}</div>
            <div v-show="item.children">></div>
          </li>
          <li class="addList clearfix" v-for="item in showSecondList" :key="item.value" @click="getSecondName(item)" v-show='showSecond'>
            <div>{{item.label}}</div>
            <div v-show="item.children">></div>
          </li>
          <li class="addList clearfix" v-for="item in showThirdList" :key="item.value" @click="getThirdName(item)" v-show='showThird'>
            <div>{{item.label}}</div>
            <div v-show="item.children">></div>
          </li>
          <li class="addList clearfix" v-for="item in showFourthList" :key="item.value" @click="getFourthName(item)" v-show='showFourth'>
            <div>{{item.label}}</div>
            <div v-show="item.children">></div>
          </li>
          <li class="addList clearfix" v-for="item in showFifthList" :key="item.value" @click="getFifthName(item)" v-show='showFifth'>
            <div>{{item.label}}</div>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
import Navgation from '../../components/Navgation.vue'
import {getList} from '../../assets/area'
export default {
  components: {
    Navgation
  },
  data() {
    return {
      // 显示联动级页面的标识
      showFirst: true,
      showSecond: false,
      showThird: false,
      showFourth: false,
      showFifth: false,
      // 联动级页面的数据
      showFirstList: [],
      showSecondList: [],
      showThirdList: [],
      showFourthList: [],
      showFifthList: [],
      // 联动级的名称
      firstTitle: '',
      secondTitle: '',
      thirdTitle: '',
      fourthTitle: '',
      fifthTitle: '',
    }
  },
  created() {
    this.showFirstList = getList()
  },
  methods: {
    valueFilter (list, type, name) {
      let result = []
      for (let i = 0; i < list.length; i++) {
        if (name === list[i].label) {
          console.log(list[i][type])
          result = list[i][type]
        }
      }
      return result || []
    },
    getFirstName (item) {
      this.firstTitle = item.label
      this.showFirst = false
      this.showSecond = true
      this.showThird = false
      this.showFourth = false
      this.showFifth = false
      this.showSecondList = this.valueFilter(this.showFirstList, 'children', item.label)
      if (this.showSecondList.length < 1) {
        this.$store.commit('updateTestType', this.firstTitle)
        this.$router.go(-1)
      }
    },
    firstLeve () {
      // 清除二级,三级,四级..列表数据 和标题
      this.showSecondList = []
      this.showThirdList = []
      this.showFourthList = []
      this.showFifthList = []
      this.secondTitle = ''
      this.thirdTitle = ''
      this.fourthTitle = ''
      this.fifthTitle = ''
      // 显示一级列表页面
      this.showFirst = true
      this.showSecond = false
      this.showThird = false
      this.showFourth = false
      this.showFifth = false
    },
    getSecondName (item) {
      this.secondTitle = item.label
      this.showFirst = false
      this.showSecond = false
      this.showThird = true
      this.showFourth = false
      this.showFifth = false
      this.showThirdList = this.valueFilter(this.showSecondList, 'children', item.label)
      if (this.showThirdList.length < 1) {
        this.$store.commit('updateTestType', this.firstTitle + '/' + this.secondTitle)
        this.$router.go(-1)
      }
    },
    secondLeve () {
      // 显示二级列表页面
      this.showFirst = false
      this.showSecond = true
      this.showThird = false
      this.showFourth = false
      this.showFifth = false
      // 清除二级列表页面以后的所有数据
      this.thirdTitle = ''
      this.showThirdList = []
      this.fourthTitle = ''
      this.showFourthList = []
      this.fifthTitle = ''
      this.showFifthList = []
    },
    getThirdName (item) {
      this.thirdTitle = item.label
      this.showFirst = false
      this.showSecond = false
      this.showThird = false
      this.showFourth = true
      this.showFifth = false
      this.showFourthList = this.valueFilter(this.showThirdList, 'children', item.label)
      if (this.showFourthList.length < 1) {
        this.$store.commit('updateTestType', this.firstTitle + '/' + this.secondTitle + '/' + this.thirdTitle)
        this.$router.go(-1)
      }      
    },
    thirdLeve () {
      // 显示三级列表页面
      this.showFirst = false
      this.showSecond = false
      this.showThird = true
      this.showFourth = false
      this.showFifth = false
      // 清除三级级列表页面以后的所有数据
      this.fourthTitle = ''
      this.showFourthList = []
      this.fifthTitle = ''
      this.showFifthList = []
    },
    getFourthName (item) {
      this.fourthTitle = item.label
      this.showFirst = false
      this.showSecond = false
      this.showThird = false
      this.showFourth = false
      this.showFifth = true
      this.showFifthList = this.valueFilter(this.showFourthList, 'children', item.label)
      if (this.showFifthList.length < 1) {
        this.$store.commit('updateTestType', this.firstTitle + '/' + this.secondTitle + '/' + this.thirdTitle + '/' + this.fourthTitle)
        this.$router.go(-1)
      }       
    },
    fourthLeve () {
      // 显示四级列表页面
      this.showFirst = false
      this.showSecond = false
      this.showThird = false
      this.showFourth = true
      this.showFifth = false
      // 清除四级级列表页面以后的所有数据
      this.fifthTitle = ''
      this.showFifthList = []
    },
    getFifthName (item) {
      this.fifthTitle = item.label
      this.showFirst = false
      this.showSecond = false
      this.showThird = false
      this.showFourth = false
      this.showFifth = true
      // this.showFourthList = this.valueFilter(this.showThirdList, 'children', item.label)
      this.$store.commit('updateTestType', this.firstTitle + '/' + this.secondTitle + '/' + this.thirdTitle + '/' + this.fourthTitle+ '/' + this.fifthTitle)
      this.$router.go(-1)
    },
    fifththLeve () {
      // 显示五级列表页面
      this.showFirst = false
      this.showSecond = false
      this.showThird = false
      this.showFourth = false
      this.showFifth = true
    }
  },
}
</script>
<style scoped>
.container {
  margin-top: 45px;
}
.address{
  height: 100%;
  left:0;
  z-index:121;
  background:#fff;
  width:100%;
}
.address section {
  position: fixed;
  background: #fff;
  width: 100%;
  z-index:122;
}
.area{
  display:inline-block;
  font-size:16px;
  line-height:30px;
  margin-left:10px;
  color:#333;
}
.addList{
  background: #efefef;
  margin: 5px;
}
.addList > div:nth-of-type(1) {
  float: left;
  line-height: 30px;
  padding-left: 10px;
  font-size: 16px;
  color: #333;
}
.addList > div:nth-of-type(2) {
  float: right;
  line-height: 30px;
  padding-right: 10px;
  font-size: 16px;
  color: #333;
}
/* 修改的格式 */
.address ul{
  padding-top: 45px;
  width:100%;
  height:100%;
  overflow:auto;
}
.address ul li{
  margin-left:5%;
}
.address .title .active{
  color:#0071B8;
  border-bottom:0.02rem solid #0071B8;
}
.address ul .active{
  color:#0071B8;
}

.clearfix:after,.clearfix:before{
  content: "";
  display: table;
}
.clearfix:after{
  clear: both;
}
.clearfix{
  *zoom: 1;
}
</style>
