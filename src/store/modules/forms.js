export default {
  state: {
    'qry': {
      inline: false, // 是否使用inline排版
      labelPosition: 'right', // 标签对齐方式
      labelWidth: '80px', // 标签宽度
      size: 'small', // 尺寸
      statusIcon: true, // 显示验证图标
      formItemList: []
    },
  },
  mutations: {
    FORM_UPDATE_WITH_FID_G(state, { fid, newV }) {
      // console.log(fid, newV)
      state[fid] = {...newV}
    }
  },
  // actions: {
  //   addItem({ commit }, formItem) {
  //     commit('UPDATE_LIST', formItem)
  //   }
  // },
}
