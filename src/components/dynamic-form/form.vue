<template>
  <el-form class="dynamic-form" :inline="dynamicForm.inline" :model="value" :label-position="dynamicForm.labelPosition" :label-width="dynamicForm.labelWidth" :size='dynamicForm.size' :status-icon="dynamicForm.statusIcon">

    <dynamic-form-item
      v-for="item in dynamicForm.formItemList"
      :key="item.key"
      v-if="value[item.key]!==undefined"
      :item="item"
      :value="value[item.key]"
      @input="handleInput($event, item.key)"
      :style="{'min-width':columnMinWidth}"></dynamic-form-item>

    <slot/>

  </el-form>
</template>

<script>
// import request from '@/utils/request'
export default {
  props: {
    dynamicForm: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    columnMinWidth: {
      type: String
    }
  },
  methods: {
    handleInput(val, key) {
      // 这里element-ui没有上报event，直接就是value了
      this.$emit('input', { ...this.value, [key]: val })
    },
    setDefaultValue() {
      const formData = { ...this.value }
      // 设置默认值
      this.dynamicForm.formItemList.forEach(item => {
        const { key, value } = item
        if (formData[key] === undefined || formData[key] === null) {
          formData[key] = value
        }
        // if (optionsUrl) {
        //   console.log(optionsUrl)
        // }
      })
      this.$emit('input', { ...formData })
    }
  },
  mounted() {
    this.setDefaultValue()
  },
}
</script>

<style lang="less">
// .dynamic-form.el-form--inline {

//   // .block {
//   //   padding-right: 10%;
//   // }

//   .el-form-item {
//     display: inline-flex;
//     // margin-right: 0;
//     // padding-left: 10px;

//     .el-form-item__content {
//       flex: 1;
//       display: inline-flex;
//       align-items: center;

//       .el-slider {
//         width: 100%
//       }
//     }

//     .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-select, .el-cascader {
//       width: 100%;
//     }
//   }
// }
</style>
