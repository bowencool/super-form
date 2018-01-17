export default {
  state: {
    formJson: {
      formItemList: []
    }
  },
  mutations: {
    ADD_ITEM(state, formItem) {
      state.formJson.formItemList.push(formItem)
    }
  },
  actions: {
    addItem({ commit }, formItem) {
      commit('ADD_ITEM', formItem)
    }
  },
}
