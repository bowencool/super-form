<template>
  <el-container id="app">
    <el-header>
      <el-menu mode="horizontal" :default-active="$route.path" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router :show-timeout="0">
        <el-submenu index="/editor">
          <template slot="title">编辑器</template>
          <el-menu-item index="/editor/form">表单</el-menu-item>
          <el-menu-item index="/editor/table">表格</el-menu-item>
          <!-- <el-menu-item index="/editor/form/edt">表单(编辑页)</el-menu-item> -->
        </el-submenu>
        <el-menu-item index="/preview">预览</el-menu-item>
      </el-menu>
      <theme-picker id="theme-picker"/>
    </el-header>
    <router-view/>
  </el-container>
</template>

<script>
import ThemePicker from '@/components/themePicker'
export default {
  components: { ThemePicker }
}
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
  padding: 0!important;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.c666 {
  color: #606266;
}
.mt5 {
  margin-top: 5px;
}
#theme-picker {
  position: fixed;
  right: 10px;
  top: 10px;
}
</style>
