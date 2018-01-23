<template lang="pug">
  div
    el-form(v-on="$listeners" v-bind="$attrs")
      el-form-item(label="标签名")
        el-input(v-model="formItem.label")
      el-form-item(label="键名")
        el-input(:value="formItem.key")
      el-form-item(label="默认值")
        el-switch(v-model="formItem.value")
      el-form-item(label="形状")
        el-radio-group(v-model="formItem.appearance")
          el-radio-button(label="checkbox") 复选框
          el-radio-button(label="switch") 开关

    pre {{formItem}}
</template>

<script>
export default {
  props: {
    formItem: {
      type: Object,
      required: true,
    }
  },
}
</script>
