<template lang="pug">
  p todo rules
</template>

<script>
export default {
  props: {
    itemRules: {
      type: Array,
      default() {
        return []
      }
    },
    itemType: {
      type: String,
      required: true,
    }
  }
}
</script>
