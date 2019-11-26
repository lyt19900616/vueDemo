import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const better = {
  state: {
    address: '',
    testType: ''
  },
  mutations: {
    updateAddress(state, item) {
      state.address = item
    },
    updateTestType(state, item) {
      state.testType = item
    }
  },
  actions: {
  }
}
export default new Vuex.Store({
  modules: {
    better
  }
})
