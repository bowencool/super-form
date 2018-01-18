export default {
  state: {
    'qry': {
      inline: true,
      formItemList: []
    },
  },
  mutations: {
    UPDATE_LIST(state, formItem) {
      state['qry'].formItemList.push(formItem)
    }
  },
  actions: {
    addItem({ commit }, formItem) {
      commit('UPDATE_LIST', formItem)
    }
  },
}
