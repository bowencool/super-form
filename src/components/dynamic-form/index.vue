<template>
  <el-form class="dynamic-form" :inline="dynamicForm.inline" :model="value" :label-position="dynamicForm.labelPosition" :label-width="dynamicForm.labelWidth" :size='dynamicForm.size' :status-icon="dynamicForm.statusIcon">

    <!-- 这里一定不能用$attrs、$listeners, 因为这里要绑定key-->
    <!-- 但是又不能修改value，因为value是props -->
    <!-- 所以考虑拆分这里的v-model -->
    <dynamic-form-item v-for="(item,i) in dynamicForm.formList" :key="i" :item="item" :value="value[item.key]" @input="handleInput($event, item.key)" :style="{'min-width':columnMinWidth}"></dynamic-form-item>

    <slot/>

  </el-form>
</template>

<script>
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
      this.dynamicForm.formList.forEach(item => {
        if (formData[item.key] === undefined || formData[item.key] === null) {
          formData[item.key] = item.value
        }
        // if ((item.type === 'cascader' || (item.type === 'select' && item.multiple)) &&
        //   (typeof formData[item.key] === 'string')) {
        //   formData[item.key] = formData[item.value].split(',')
        // }
      })
      this.$emit('input', { ...formData })
    }
  },
  mounted() {
    this.setDefaultValue()
  },
  // watch: {
  //   dynamicForm(nnew, old) {
  //     if (this.$refs.form) this.$refs.form.clearValidate()
  //     old.formList.forEach(item => {
  //       delete this.value[item.key]
  //     })
  //     this.setDefaultValue()
  //   }
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
        width: 100%
      }
    }

    .el-date-editor.el-input, .el-date-editor.el-input__inner, .el-select, .el-cascader {
      width: 100%;
    }
  }
}
</style>
