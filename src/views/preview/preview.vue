<template lang="pug">
  div
    pre {{hehe}}
    el-button(@click='validate' type="primary") validate
    dynamic-form(:dynamicForm="$store.state.forms.qry" v-model="hehe" ref="form-preview")
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
