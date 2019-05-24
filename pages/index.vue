<template>
  <div class="container">
    <v-banner></v-banner>
    <div class="conent-wrapper">
      <v-title bg-title="Photo Wall" title="照片墙"></v-title>
      <el-row :gutter="20">
        <el-col :span="8"><v-card></v-card></el-col>
        <el-col :span="8"><v-card></v-card></el-col>
        <el-col :span="8"><v-card></v-card></el-col>
      </el-row>
    </div>
    <div class="conent-wrapper">
      <v-title bg-title="Latest News" title="最新资讯"></v-title>
      <el-row :gutter="20">
        <el-col :span="8"><v-card></v-card></el-col>
        <el-col :span="8"><v-card></v-card></el-col>
        <el-col :span="8"><v-card></v-card></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import VBanner from '@/components/banner'
import VCard from '@/components/card'
import VTitle from '@/components/title'
export default {
  components: {
    VBanner,
    VCard,
    VTitle
  }
}
</script>

<style lang="scss" scoped>
.container {
  .conent-wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 80px 0;
  }
}
</style>
