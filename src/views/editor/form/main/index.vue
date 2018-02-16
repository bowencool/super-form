<template lang="pug">
  el-main
    fake-form(:dynamicForm="currentForm")
    //- pre {{currentForm}}
</template>

<script>
import FakeForm from './fake-form'
export default {
  components: { FakeForm },
  computed: {
    currentForm() {
      return this.$store.state.forms[this.$route.params.fid]
    }
  }
}
</script>
