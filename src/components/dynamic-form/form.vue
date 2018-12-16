<template>
  <el-form
    :inline="formConfig.inline"
    :model="value"
    :label-position="formConfig.labelPosition"
    :label-width="formConfig.labelWidth"
    :size="formConfig.size"
    :status-icon="formConfig.statusIcon"
    class="dynamic-form"
  >

    <dynamic-form-item
      v-for="item in formConfig.formItemList"
      v-if="value[item.key]!==undefined"
      :key="item.key"
      :item="item"
      :value="value[item.key]"
      :style="{'min-width':columnMinWidth}"
      @input="handleInput($event, item.key)"
    ></dynamic-form-item>

    <slot ></slot>

  </el-form>
</template>

<script>
export default {
  props: {
    formConfig: {
      type: Object,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
    columnMinWidth: {
      type: String,
    },
  },
  mounted() {
    this.setDefaultValue();
  },
  methods: {
    handleInput(val, key) {
      // 这里element-ui没有上报event，直接就是value了
      this.$emit('input', { ...this.value, [key]: val });
    },
    setDefaultValue() {
      const formData = { ...this.value };
      // 设置默认值
      this.formConfig.formItemList.forEach(item => {
        const { key, value } = item;
        if (formData[key] === undefined || formData[key] === null) {
          formData[key] = value;
        }
      });
      this.$emit('input', { ...formData });
    },
  },
};
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
