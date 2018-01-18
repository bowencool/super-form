import Vue from 'vue'
import Vuex from 'vuex'
import forms from './modules/forms' // 顶部查询表单

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    forms,
  },
})

export default store
