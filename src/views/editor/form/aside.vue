<template lang="pug">
  el-aside(style="background-color: rgb(238, 241, 246)")
    el-tabs(v-model="activeName")
      el-tab-pane(label="所有组件" name="items-list")
        el-tag(v-for="(item,i) in LIST" :key="i")
          icon-svg(icon="text")
          span {{item.label}}
      el-tab-pane(label="全局配置" name="global-config")
        pre {{currentForm}}
        el-switch(v-model="currentForm.inline")
      el-tab-pane(label="组件配置" name="item-config") some form
</template>

<script>
import { DYNAMIC_FORM } from '@/utils/constant'
const { formList: LIST } = DYNAMIC_FORM
export default {
  data() {
    return {
      activeName: 'items-list',
      LIST
    }
  },
  computed: {
    currentForm() {
      return this.$store.state.forms[this.$route.params.fid]
    }
  }
}
</script>
