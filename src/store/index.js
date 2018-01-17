import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import form1 from './modules/form1' // 顶部查询表单

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    form1,
  },
  getters,
})

export default store
