<template>
  <div class="nav">
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
    >
      <el-menu-item index="1">校友新闻</el-menu-item>
      <el-menu-item index="2">校友分布</el-menu-item>
      <el-menu-item index="3">登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'v-nav',
  data(){
   return {
     activeIndex: '1'
   }
  }
}
</script>

<style lang="scss" scoped>
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>
