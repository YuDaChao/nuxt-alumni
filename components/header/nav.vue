<template>
  <div class="nav">
    <el-menu
      mode="horizontal"
      router
      :default-active="activeIndex"
      background-color="transparent"
      text-color="#333"
      active-text-color="#409EFF"
    >
      <el-menu-item index="/">校友新闻</el-menu-item>
      <el-menu-item index="/distribute">校友分布</el-menu-item>
      <el-menu-item index="/login">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'v-nav',
  data () {
    return {
      activeIndex: this.$route.path || '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  height: 100%;
  .el-menu--horizontal {
    height: 100%;
    .el-menu-item {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-item {
  &:hover {
    border-bottom-color: rgb(64, 158, 255) !important;
    background-color: transparent !important;
  }
}
</style>
