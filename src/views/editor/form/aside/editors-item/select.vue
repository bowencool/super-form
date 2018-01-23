<template lang="pug">
  div
    el-form(v-on="$listeners" v-bind="$attrs")
      el-form-item(label="标签名")
        el-input(v-model="formItem.label")
      el-form-item(label="键名")
        el-input(:value="formItem.key")
      el-form-item(label="多选")
        el-switch(:value="formItem.multiple" @input="handleTypeChange")
      el-form-item(label="默认值")
        el-select(v-model="formItem.value" clearable :multiple="formItem.multiple")
          el-option(v-for="o in formItem.options" :key="o.value" :label="o.label" :value="o.value")

    editor-options(:itemOptions="formItem.options")

    //- wtf?
    //- editor-rules(:item-rules.sync="formItem.rules" :item-type="formItem.type")
    editor-rules(:item-rules="formItem.rules" @update:item-rules="n => formItem.rules = n" :item-type="formItem.type")

    pre {{formItem}}
</template>

<script>
import EditorRules from '../editor-rules'
import EditorOptions from '../editor-options'
export default {
  components: { EditorRules, EditorOptions },
  props: {
    formItem: {
      type: Object,
      required: true,
    }
  },
  methods: {
    handleTypeChange(m) {
      this.formItem.multiple = m
      this.formItem.value = m ? [] : ''
    }
  }
}
</script>
