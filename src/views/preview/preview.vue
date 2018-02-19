<template lang="pug">
  div
    dynamic-form(:dynamicForm="$store.state.forms.qry" v-model="hehe" ref="form-preview")
    el-button(@click='$router.go(-1)' :size="$store.state.forms.qry.size") 返回
    el-button(@click='validate' :loading="loading" type="primary" :size="$store.state.forms.qry.size") 测试验证
    p 表单数据：
      pre {{hehe}}
    p 表单配置：
      pre {{$store.state.forms.qry}}
</template>

<script>
export default {
  data() {
    return {
      hehe: {},
      loading: false,
    }
  },
  methods: {
    validate() {
      this.loading = true
      const form = this.$refs['form-preview'].$children[0]
      form.validate()
        .then(() => { this.loading = false })
        .catch(() => { this.loading = false })
    }
  }
}
</script>
