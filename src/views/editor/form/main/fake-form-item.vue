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
    //- 数字
    el-input(
      v-else-if="item.type==='number'"
      :disabled="true"
      :value="item.value"
    )
      template(v-if="item.append" slot="append") {{item.append}}
      template(v-if="item.prepend" slot="prepend") {{item.prepend}}
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
          v-for="o in item.options"
          :key='o.value'
          :label="o.value"
          disabled) {{o.label}}
      template(v-else)
        el-radio(
          v-for="o in item.options"
          :key='o.value'
          :label="o.value"
          :border="item.border"
          disabled) {{o.label}}
    //- 多选
    el-checkbox-group(
      v-else-if="item.type==='checkbox'"
      :value="item.value")
      template(v-if="item.button")
        el-checkbox-button(
          v-for="o in item.options"
          :key='o.value'
          :label="o.value"
          disabled) {{o.label}}
      template(v-else)
        el-checkbox(
          v-for="o in item.options"
          :key='o.value'
          :label="o.value"
          :border="item.border"
          disabled) {{o.label}}
    //- 下拉
    el-select(
      v-else-if="item.type==='select'"
      :value="item.value"
      :multiple="item.multiple"
      disabled)
      el-option(
        v-for="o in item.options"
        :key="o.value"
        :label="o.label"
        :value="o.value"
        disabled)
    //- 日期
    el-date-picker(
      v-else-if="item.type==='date'"
      :disabled="true"
      :type="item.subtype"
      :value-format="item.valueFormat"
      :format="item.viewFormat||item.valueFormat"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :placeholder="item.placeholder"
      :value="item.value")

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
