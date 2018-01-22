<template>
  <el-form class="dynamic-form fake-form" :inline="dynamicForm.inline" :label-position="dynamicForm.labelPosition" :label-width="dynamicForm.labelWidth" :size='dynamicForm.size'>

    <draggable v-model="dynamicForm.formItemList">

      <transition-group name="list-complete">

        <div v-for="(item,i) in dynamicForm.formItemList" :key="item.key" class="draggable list-complete-item" :class="{'selected': $store.state.itemKey===item.key}" @click="select(item.key)">

          <fake-form-item :item="item"></fake-form-item>
          <i class="el-icon-delete" @click.stop="deleteItem(i)"></i>

        </div>
      </transition-group>

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
  },
  methods: {
    select(key) {
      this.$store.commit('SELECT_ITEM', key)
    },
    deleteItem(i) {
      this.dynamicForm.formItemList.splice(i, 1)
    }
  },
}
</script>

<style lang="less">
.fake-form {
  .draggable {
    position: relative;
    padding: 5px 10px 0 5px;
    cursor: move;

    i[class^="el-icon"] {
      display: none;
      position: absolute;
      right: 3px;
      top: 3px;
      cursor: pointer;
      color: #ff3c00b9;
    }

    &:hover {
      i[class^="el-icon"] {
        display: inline;
      }
    }
  }

  .selected {
    border: 1px dashed #40a0ffce;
    background-color: #add8e62b;
    border-radius: 3px;
  }

  .el-form-item {
    label {
      cursor: move;
    }
  }

  &.el-form--inline {
    .draggable {
      display: inline-block;
    }
  }
}

.list-complete-item {
  transition: all 1s;
}

.list-complete-enter, .list-complete-leave-active {
  opacity: 0;
}
</style>
