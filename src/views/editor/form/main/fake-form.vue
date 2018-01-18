<template>
  <el-form class="dynamic-form fake-form" :inline="dynamicForm.inline" :label-position="dynamicForm.labelPosition" :label-width="dynamicForm.labelWidth" :size='dynamicForm.size'>

    <draggable v-model="dynamicForm.formItemList">
      <!-- <span> todo block时失效-->
        <!-- next 加一个删除按钮 -->

        <fake-form-item v-for="(item,i) in dynamicForm.formItemList" :key="item.key" :class="{'selected': $store.state.itemKey===item.key}" @click.native="select(item.key)" :item="item" :style="{'min-width':columnMinWidth}"></fake-form-item>

      <!-- </span> -->
    </draggable>

  </el-form>
</template>

<script>
import Draggable from 'vuedraggable'
import FakeFormItem from './fake-form-item'
export default {
  components: { FakeFormItem, Draggable },
  props: {
    dynamicForm: {
      type: Object,
      required: true
    },
    columnMinWidth: {
      type: String
    }
  },
  methods: {
    select(key) {
      this.$store.commit('SELECT_ITEM', key)
    }
  },
}
</script>

<style lang="less">
.dynamic-form.fake-form {
  // .block {
  //   padding-right: 10%;
  // }

  .el-form-item {
    padding: 5px;
    cursor: move;

    label,
    input {
      cursor: move;
    }

    &.selected {
      border: 1px dashed #409eff;
      border-radius: 3px;
    }
    //     display: inline-flex;
    //     // margin-right: 0;
    //     // padding-left: 10px;

    // .el-form-item__content {
    //       flex: 1;
    //       display: inline-flex;
    //       align-items: center;

    //       .el-slider {
    //         width: 100%;
    // }
  }

  //     .el-date-editor.el-input,
  //     .el-date-editor.el-input__inner,
  //     .el-select,
  //     .el-cascader {
  //       width: 100%;
  //     }
  //   }
}
</style>
