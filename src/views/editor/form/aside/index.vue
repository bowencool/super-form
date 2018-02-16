<style lang="less">
.bowen-aside {
  background-color: rgb(238, 241, 246);
  .el-card {
    background-color: inherit;
    .el-card__body {
      padding: 0 5px;
    }
  }
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
        el-card
          el-tag.item(v-for="(item,i) in require('@/utils/constant').DYNAMIC_FORM.formItemList" :key="i" @click.native="addItem(item)")
            icon-svg(:icon="item.type")
            span {{item.label}}

      el-tab-pane(label="组件配置" name="item-config")
        el-card
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
import guid from '@/utils/guid'
import EditorInput from './editors-item/input'
import EditorNumber from './editors-item/number'
import EditorSwitch from './editors-item/switch'
import EditorRadio from './editors-item/radio'
import EditorCheckbox from './editors-item/checkbox'
import EditorSelect from './editors-item/select'

export default {
  components: {
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
  methods: {
    addItem(item) {
      const key = guid()
      this.currentForm.formItemList.push({ ...item, key })
      // todo 在这里做好子类型选择
      this.$store.commit('SELECT_ITEM', key)
    }
  }
}
</script>
