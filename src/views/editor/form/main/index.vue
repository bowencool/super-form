<template lang="pug">
  el-main
    fake-form(:form-config="currentForm")
    //- pre {{currentForm}}
</template>

<script>
import FakeForm from './fake-form';

export default {
  components: { FakeForm },
  computed: {
    currentForm() {
      return this.$store.state.form;
    },
  },
};
</script>
