<template lang="pug">
  div
    el-form(v-on="$listeners" v-bind="$attrs")
      el-form-item(label="类型")
        el-radio-group(v-model="formItem.subtype")
          el-radio-button(label="text") 文本
          el-radio-button(label="password") 密码
          el-radio-button(label="textarea") 多行文本
      el-form-item(label="标签名")
        el-input(v-model="formItem.label")
      el-form-item(label="占位文本")
        el-input(v-model="formItem.placeholder")
      el-form-item(label="键名")
        el-input(:value="formItem.key" readonly)
      el-form-item(label="默认值")
        el-input(v-model="formItem.value" :type="formItem.subtype")

    //- wtf?
    //- editor-rules(:item-rules.sync="formItem.rules" :item-type="formItem.type")
    editor-rules(:item-rules="formItem.rules" @update:item-rules="n => formItem.rules = n" :item-type="formItem.type")

    pre {{formItem}}
</template>

<script>
import EditorRules from '../editor-rules'
export default {
  components: { EditorRules },
  props: {
    formItem: {
      type: Object,
      required: true,
    }
  },
}
</script>
