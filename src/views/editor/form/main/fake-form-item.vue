<template lang="pug">
  <!-- todo functional -->
  el-form-item(:label="item.label")
    //- 文本
    el-input(
      v-if="item.type==='input'"
      :disabled="true"
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
    //- 单选
    el-radio-group(
      v-else-if="item.type==='radio'"
      :value="item.value")
      template(v-if="item.button")
        el-radio-button(
          v-for="(v,k) in item.options"
          :key='k'
          :label="k"
          :border="item.border"
          disabled) {{v}}
      template(v-else)
        el-radio(
          v-for="(v,k) in item.options"
          :key='k'
          :label="k"
          :border="item.border"
          disabled) {{v}}

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
