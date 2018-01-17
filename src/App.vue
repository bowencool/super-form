<template>
  <div id="app">
    <el-menu mode="horizontal" :default-active="$route.fullPath" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router menu-trigger="click">
      <el-submenu index="/editor">
        <template slot="title">编辑器</template>
        <el-menu-item index="/editor/query-form">查询表单</el-menu-item>
        <el-menu-item index="/editor/table">表格</el-menu-item>
        <el-menu-item index="/editor/form">表单</el-menu-item>
      </el-submenu>
      <el-menu-item index="/preview">预览</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
html,
body,
#app,
.el-container {
  margin: 0;
  height: 100%;
}
</style>
