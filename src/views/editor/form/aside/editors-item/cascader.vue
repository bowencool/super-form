<template lang="pug">
  div
    el-form(v-on="$listeners" v-bind="$attrs")
      el-form-item(label="标签名")
        el-input(v-model="formItem.label")
      el-form-item(label="键名")
        el-input(:value="formItem.key" readonly)
      el-form-item(label="占位文本")
        el-input(v-model="formItem.placeholder")
      el-form-item(label="默认值")
        el-cascader(v-model="formItem.value" :options="formItem.options||require('element-china-area-data')[formItem.areaShortcut]" :clearable="true")
      el-form-item(label="禁用")
        el-checkbox(v-model="formItem.disabled")
      //- el-form-item(label="可搜索") todo
      //-   el-checkbox(v-model="formItem.filterable")

    editor-rules(:item-rules="formItem.rules" @update:item-rules="n => formItem.rules = n" :item-type="formItem.type" types="required")

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
