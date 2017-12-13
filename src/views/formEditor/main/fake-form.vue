<template>
  <el-form class="dynamic-form" :inline="dynamicForm.inline" :label-position="dynamicForm.labelPosition" :label-width="dynamicForm.labelWidth" :size='dynamicForm.size'>

    <fake-form-item v-for="(item,i) in dynamicForm.formList" :key="i" :item="item" :style="{'min-width':columnMinWidth}"></fake-form-item>

    <slot/>

  </el-form>
</template>

<script>
import FakeFormItem from './fake-item'
export default {
  components: { FakeFormItem },
  props: {
    dynamicForm: {
      type: Object,
      required: true
    },
    // value: {
    //   type: Object,
    //   required: true
    // },
    columnMinWidth: {
      type: String
    }
  },
  methods: {
    // handleInput(val, key) {
    //   // 这里element-ui没有上报event，直接就是value了
    //   this.value[key] = val
    //   this.$emit('input', { ...this.value })
    // },
    // setDefaultValue() {
    //   // 设置默认值
    //   this.dynamicForm.formList.forEach(item => {
    //     if (this.value[item.key] === undefined) this.value[item.key] = item.value
    //   })
    //   this.$emit('input', { ...this.value })
    // }
  },
  // created() {
  // this.setDefaultValue()
  // },
  // watch: {
  //   dynamicForm: 'setDefaultValue'
  // }
}
</script>

<style lang="less">
.dynamic-form.el-form--inline {
  // .block {
  //   padding-right: 10%;
  // }

  .el-form-item {
    display: inline-flex;
    // margin-right: 0;
    // padding-left: 10px;

    .el-form-item__content {
      flex: 1;
      display: inline-flex;
      align-items: center;

      .el-slider {
        width: 100%;
      }
    }

    .el-date-editor.el-input,
    .el-date-editor.el-input__inner,
    .el-select,
    .el-cascader {
      width: 100%;
    }
  }
}
</style>
