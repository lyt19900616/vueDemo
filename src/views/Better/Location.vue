<template>
  <div class="container">
    <Navgation :title="title">
      <span class="map" slot="left" @click="$router.go(-1)"><i class="iconfont iconfanhui"></i></span>
      <span class="map" slot="right"></span>
    </Navgation>
    <div class="address">
          <section class="title">
            <div class="area" @click="provinceLeve()" :class="province?'':'active'">{{province?province:'请选择'}}</div>
            <div class="area" @click="cityLeve()" v-show="this.showCityList.length > 0" :class="city?'':'active'">{{city?city:'请选择'}}</div>
            <div class="area" @click="countryLeve()" v-show="this.showCountryList.length > 0" :class="country?'':'active'">{{country?country:'请选择'}}</div>
          </section>
          <ul>
            <li class="addList clearfix" v-for="item in showProvinceList" :key="item.name" @click="getProvince(item)" v-show="showProvince">
              <div>{{item.name}}</div>
              <div v-show="item.city">></div>
            </li>
            <li class="addList clearfix" v-for="item in showCityList" :key="item.name" @click="getCity(item)" v-show='showCity'>
              <div>{{item.name}}</div>
              <div v-show="item.area">></div>
            </li>
            <li class="addList clearfix" v-for="(item, i) in showCountryList" :key="i" @click="getCountry(item)" v-show='showCountry'>
              <div>{{item}}</div>
            </li>
          </ul>
    </div>
  </div>
</template>
<script>
import Navgation from '../../components/Navgation.vue'
import {getArea} from '../../assets/area'
export default {
  components: {
    Navgation
  },
  data() {
    return {
      title: '请选择',
      // 显示联动级页面的标识
      showProvince: true,
      showCity: false,
      showCountry: false,
      // 联动级页面的数据
      showProvinceList: [],
      showCityList: [],
      showCountryList: [],
      // 联动级的名称
      province: '',
      city: '',
      country: ''
    }
  },
  created() {
    this.showProvinceList = getArea()
  },
  methods: {
    // 多级选择器
    valueFilter (list, type, name) {
      let result = []
      for (let i = 0; i < list.length; i++) {
        if (name === list[i].name) {
          console.log(list[i][type])
          result = list[i][type]
        }
      }
      return result || []
    },
    getProvince (item) {
      this.province = item.name
      this.showProvince = false
      this.showCity = true
      this.showCountry = false
      this.showCityList = this.valueFilter(this.showProvinceList, 'city', item.name)
    },
    provinceLeve () {
      // 清除二级,三级,四级..列表数据 和标题
      this.showCityList = []
      this.showCountryList = []
      this.city = ''
      this.country = ''
      // 显示一级列表页面
      this.showProvince = true
      this.showCity = false
      this.showCountry = false
    },
    getCity (item) {
      this.city = item.name
      this.showProvince = false
      this.showCity = false
      this.showCountry = true
      this.showCountryList = this.valueFilter(this.showCityList, 'area', item.name)
    },
    cityLeve () {
      // 显示二级列表页面
      this.showProvince = false
      this.showCity = true
      this.showCountry = false
      // 清除二级列表页面以后的所有数据
      this.showCountryList = []
    },
    getCountry (item) {
      this.country = item
      this.showProvince = false
      this.showCity = false
      this.showCountry = false

      this.$store.commit('updateAddress', this.province + ' ' + this.city + ' ' + this.country)
      this.$router.go(-1)
    },
    countryLeve () {
      // 显示三级列表页面
      this.showProvince = false
      this.showCity = false
      this.showCountry = true
    },
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
