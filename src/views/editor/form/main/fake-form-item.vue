<template>
  <!-- todo functional -->
  <el-form-item :label="item.label">

    <el-input v-if="item.type==='input'" readonly :type="item.subtype" :placeholder="item.placeholder" :autosize="item.autosize" :value="item.value"></el-input>

    <el-checkbox v-else-if="item.type==='switch' && item.appearance==='checkbox'" :value="item.value"></el-checkbox>
    <el-switch v-else-if="item.type==='switch'" :value="item.value"></el-switch>

    <span v-else>未知控件类型</span>

  </el-form-item>
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
