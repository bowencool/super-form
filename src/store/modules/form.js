export default {
  state: {
    inline: false, // 是否使用inline排版
    labelPosition: 'right', // 标签对齐方式
    labelWidth: '80px', // 标签宽度
    size: 'small', // 尺寸
    statusIcon: true, // 显示验证图标
    formItemList: []
  },
  mutations: {
    UPDATE_FORM(state, payload) {
      Object.assign(state, payload)
    }
  },
}
