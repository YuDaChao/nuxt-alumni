<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main class="el-main-wrapper">
      <div class="main-content">
        <nuxt />
      </div>
    </el-main>
    <el-footer>
      <v-footer></v-footer>
    </el-footer>
  </el-container>
</template>

<script>
import VHeader from '@/components/header'
import VFooter from '@/components/footer'
export default {
  name: 'default',
  components: {
    VHeader,
    VFooter
  }
}
</script>


<style lang="scss" scoped>
.el-header {
  background-color: #ffffff;
  box-shadow: 0 2px 27px 0 rgba(0,0,0,.1);
  z-index: 10
}
.el-footer {
  padding: 0;
}
.el-main-wrapper {
  padding: 0
}
.main-content {
  min-height: calc(100vh - 120px);
  margin: 0 auto;
}
</style>
