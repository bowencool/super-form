<template lang="pug">
  <!-- todo functional -->
  el-form-item(:label="item.label")
    //- 文本
    el-input(
      v-if="item.type==='input'"
      :readonly="true"
      :type="item.subtype"
      :placeholder="item.placeholder"
      :autosize="item.autosize"
      :value="item.value")
    //- 开关
    el-checkbox(
      v-else-if="item.type==='switch' && item.appearance==='checkbox'"
      :value="item.value"
      :disabled="true")
    el-switch(
      v-else-if="item.type==='switch'"
      :value="item.value"
      :disabled="true")

    span(v-else) 未知控件类型

</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
}
</script>
