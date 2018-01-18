<template lang="pug">
  el-aside(style="background-color: rgb(238, 241, 246)")
    el-tabs(v-model="activeName")

      el-tab-pane(label="所有组件" name="items-list")
        el-tag(v-for="(item,i) in LIST" :key="i" @click.native="addItem(item)")
          //- icon-svg(:icon="item.type")
          span {{item.label}}

      el-tab-pane(label="全局配置" name="global-config")
        dynamic-form(:dynamicForm="FORM_G" v-model="currentForm")

      el-tab-pane(label="组件配置" name="item-config") some form

      el-tab-pane(label="查看JSON" name="source")
        pre {{currentForm}}
</template>

<script>
import FORM_G from './form-global.json'
import { DYNAMIC_FORM } from '@/utils/constant'
const { formItemList: LIST } = DYNAMIC_FORM
export default {
  data() {
    return {
      activeName: 'items-list',
      LIST,
      FORM_G,
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
    }
  },
  methods: {
    addItem(item) {
      this.currentForm.formItemList.push(item)
    }
  }
}
</script>
