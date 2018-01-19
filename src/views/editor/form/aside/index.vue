<template lang="pug">
  el-aside(style="background-color: rgb(238, 241, 246)")
    el-tabs(v-model="activeName")

      el-tab-pane(label="所有组件" name="items-list")
        el-tag(v-for="(item,i) in require('@/utils/constant').DYNAMIC_FORM.formItemList" :key="i" @click.native="addItem(item)")
          icon-svg(:icon="item.type")
          span {{item.label}}

      el-tab-pane(label="全局配置" name="global-config")
        dynamic-form(:dynamicForm="require('./editor-global.json')" v-model="currentForm")
        //- todo 配置按钮

      el-tab-pane(label="组件配置" name="item-config")
        component(
          v-if="selectedItem"
          :is="`editor-${selectedItem.type}`"
          :form-item="selectedItem"
          size="mini"
          label-position="right"
          label-width="75px"
          inline
        )

      el-tab-pane(label="查看JSON" name="source")
        pre {{currentForm}}
</template>

<script>
import guid from '@/utils/guid'
import EditorInput from './editors-item/input'

export default {
  components: { EditorInput },
  data() {
    return {
      activeName: 'items-list',
    }
  },
  computed: {
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
    }
  },
  methods: {
    addItem(item) {
      const key = guid()
      this.currentForm.formItemList.push({ ...item, key })
      this.$store.commit('SELECT_ITEM', key)
    }
  }
}
</script>
