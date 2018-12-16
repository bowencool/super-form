<template lang="pug">
  div
    el-form(v-on="$listeners" v-bind="$attrs")
      el-form-item(label="标签名")
        el-input(v-model="formItem.label")
      el-form-item(label="键名")
        el-input(:value="formItem.key" readonly)
      el-form-item(label="占位文本")
        el-input(v-model="formItem.placeholder")
      el-form-item(label="格式")
        el-input(v-model="formItem.valueFormat")
      el-form-item(label="默认值")
        el-date-picker(
          :type="formItem.subtype"
          :value-format="formItem.valueFormat"
          :format="formItem.viewFormat||formItem.valueFormat"
          placeholder="选择默认值"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          v-model="formItem.value")
      el-form-item(label="禁用")
        el-checkbox(v-model="formItem.disabled")
    editor-rules(:item-rules="formItem.rules" @update:item-rules="n => formItem.rules = n" :item-type="formItem.type" types="required")

    pre {{formItem}}
</template>

<script>
import EditorRules from '../editor-rules';

export default {
  components: { EditorRules },
  props: {
    formItem: {
      type: Object,
      required: true,
    },
  },
};
</script>
