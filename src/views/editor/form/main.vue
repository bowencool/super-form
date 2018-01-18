<template lang="pug">
  el-main
    pre {{currentForm}}
</template>

<script>
export default {
  computed: {
    currentForm() {
      return this.$store.state.forms[this.$route.params.fid]
    }
  }
}
</script>
