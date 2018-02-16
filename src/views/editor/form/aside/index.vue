<style lang="less">
.bowen-aside {
  background-color: rgb(238, 241, 246);
  .el-tag.item {
    cursor: pointer;
    font-size: 14px;
    height: 60px;
    line-height: 1.2;
    padding: 10px;
    text-align: center;
    margin: 5px;
    .icon-svg {
      width: 1.3em;
      height: 1.3em;
    }
    span {
      display: block;
    }
  }
  .el-input-number--mini {
    width: 100px;
  }
}
</style>

<template lang="pug">
  el-aside.bowen-aside
    el-tabs(v-model="activeName")

      el-tab-pane(label="添加组件" name="items-list")
        items-list(@add="addItem")

      el-tab-pane(label="组件配置" name="item-config")
        component(
          v-if="selectedItem"
          :is="`editor-${selectedItem.type}`"
          :form-item="selectedItem"
          size="mini"
          label-position="right"
          label-width="70px"
        )
        p(v-else) 先选择一个组件

      el-tab-pane(label="全局配置" name="global-config")
        dynamic-form(:dynamicForm="require('./editor-global.json')" v-model="currentForm")
        //- todo 配置按钮

      el-tab-pane(label="查看JSON" name="source")
        pre {{currentForm}}
</template>

<script>
import ItemsList from './items-list'
import EditorInput from './editors-item/input'
import EditorNumber from './editors-item/number'
import EditorSwitch from './editors-item/switch'
import EditorRadio from './editors-item/radio'
import EditorCheckbox from './editors-item/checkbox'
import EditorSelect from './editors-item/select'

export default {
  components: {
    ItemsList,
    EditorInput,
    EditorSwitch,
    EditorCheckbox,
    EditorRadio,
    EditorSelect,
    EditorNumber,
  },
  computed: {
    activeName: {
      get() {
        return this.$store.state.asideActiveName
      },
      set(newV) {
        this.$store.commit('TOGGLE_ASIDE_ACTIVE', newV)
      }
    },
    currentForm: {
      get() {
        return this.$store.state.forms[this.$route.params.fid]
      },
      set(newV) {
        this.$store.commit('FORM_UPDATE_WITH_FID_G', { fid: this.$route.params.fid, newV })
      }
    },
    selectedItem() {
      return this.currentForm.formItemList.find(item => item.key === this.$store.state.itemKey)
    },
  },
  data() {
    return {
      popInput: false,
    }
  },
  methods: {
    addItem(item) {
      this.currentForm.formItemList.push(item)
      this.$store.commit('SELECT_ITEM', item.key)
    }
  }
}
</script>
