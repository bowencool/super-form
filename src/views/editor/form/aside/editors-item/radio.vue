<template lang="pug">
  div
    el-form(v-on="$listeners" v-bind="$attrs")
      el-form-item(label="标签名")
        el-input(v-model="formItem.label")
      el-form-item(label="键名")
        el-input(:value="formItem.key" readonly)
      el-form-item(label="默认值")
        el-select(v-model="formItem.value")
          el-option(v-for="(v,k) in formItem.options" :key="k" :label="v" :value="k")
      el-form-item(label="显示边框")
        el-switch(v-model="formItem.border")
      el-form-item(label="按钮形状")
        el-switch(v-model="formItem.button")

    //- todo editor-option

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
