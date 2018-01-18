<template lang="pug">
  el-aside(style="background-color: rgb(238, 241, 246)")
    el-tabs(v-model="activeName")
      el-tab-pane(label="所有组件" name="items-list") some list
      el-tab-pane(label="全局配置" name="global-config")
        pre {{currentForm}}
        el-switch(v-model="currentForm.inline")
      el-tab-pane(label="组件配置" name="item-config") some form
</template>

<script>
export default {
  data() {
    return {
      activeName: 'items-list'
    }
  },
  computed: {
    currentForm() {
      return this.$store.state.forms[this.$route.params.fid]
    }
  }
}
</script>
