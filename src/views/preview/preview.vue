<template lang="pug">
  div
    dynamic-form(:form-config="form" v-model="hehe" ref="form-preview")
    el-button(@click='$router.go(-1)' :size="form.size") 返回
    el-button(@click='validate' :loading="loading" type="primary" :size="form.size") 测试验证
    p 表单数据：
      pre {{hehe}}
    p 表单配置：
      pre {{form}}
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      hehe: {},
      loading: false,
    }
  },
  computed: {
    ...mapState([
      'form',
    ]),
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
