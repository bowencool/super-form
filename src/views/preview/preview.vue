<template lang="pug">
  div
    pre {{hehe}}
    dynamic-form(:dynamicForm="$store.state.forms.qry" v-model="hehe" ref="form-preview")
      el-button(@click='validate') validate
</template>

<script>
export default {
  data() {
    return {
      hehe: {}
    }
  },
  methods: {
    validate() {
      const form = this.$refs['form-preview'].$children[0]
      // console.log(form)
      form.validate()
    }
  }
}
</script>
