<template>
  <!-- todo functional -->
  <el-form-item :label="item.label">

    <el-input v-if="item.type==='input'" readonly :type="item.subtype" :placeholder="item.placeholder" :autosize="item.autosize" :value="item.value"></el-input>

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
