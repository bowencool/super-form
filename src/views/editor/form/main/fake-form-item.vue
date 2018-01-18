<template>
  <!-- todo functional -->
  <el-form-item :label="item.label">

    <el-input v-if="item.type==='input'" readonly :placeholder="item.placeholder" :autosize="item.autosize"></el-input>

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
