<template>
  <el-container id="app">
    <el-header>
      <el-menu mode="horizontal" :default-active="$route.path" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router :show-timeout="0">
        <el-submenu index="/editor">
          <template slot="title">编辑器</template>
          <el-menu-item index="/editor/form/qry">表单</el-menu-item>
          <el-menu-item index="/editor/table">表格</el-menu-item>
          <!-- <el-menu-item index="/editor/form/edt">表单(编辑页)</el-menu-item> -->
        </el-submenu>
        <el-menu-item index="/preview">预览</el-menu-item>
      </el-menu>
    </el-header>
    <router-view/>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less">
html,
body,
#app {
  margin: 0;
  font-size: 14px;
  height: 100%;
}
.el-header {
  padding: 0;
}
// .clear-fix:after {
//   display: table;
//   clear: both;
//   content: ' ';
// }
.text-center {
  text-align: center;
}
.c666 {
  color: #606266;
}
</style>
