<template lang="pug">
  div
    el-form(v-on="$listeners" v-bind="$attrs")
      el-form-item(label="标签名")
        el-input(v-model="formItem.label")
      el-form-item(label="前缀")
        el-input(v-model="formItem.prepend")
      el-form-item(label="后缀")
        el-input(v-model="formItem.append")
      el-form-item(label="键名")
        el-input(:value="formItem.key" readonly)
      el-form-item(label="默认值")
        el-input-number(v-model="formItem.value" controls-position="right")
      el-form-item(label="最小值")
        el-input-number(v-model="formItem.min" controls-position="right")
      el-form-item(label="最大值")
        el-input-number(v-model="formItem.max" controls-position="right")
      el-form-item(label="小数位数")
        el-checkbox(:value="formItem.decimal1!==null" @input="handleDecimal")
        el-input-number(v-if="formItem.decimal1!==null" v-model="formItem.decimal1" controls-position="right")
      el-form-item(label="禁用")
        el-checkbox(v-model="formItem.disabled")
      //- el-form-item(label="只读")
      //-   el-switch(v-model="formItem.readonly")

    pre {{formItem}}
</template>

<script>
export default {
  props: {
    formItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDecimal(boo) {
      this.formItem.decimal1 = boo ? 0 : null;
      // this.formItem.decimal1 = boo ? 0 : NaN // wtf?
    },
  },
};
</script>
