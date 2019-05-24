<template>
  <el-carousel :interval="5000" height="410px">
    <el-carousel-item>
      <img class="img" src="~assets/images/banner/b1.jpg" />
    </el-carousel-item>
    <el-carousel-item>
      <img class="img" src="~assets/images/banner/b2.jpg" />
    </el-carousel-item>
    <el-carousel-item>
      <img class="img" src="~assets/images/banner/b3.jpg" />
    </el-carousel-item>
    <el-carousel-item>
      <img class="img" src="~assets/images/banner/b4.jpg" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'banner',
  data () {
   return {}
  }
}
</script>

<style lang="scss" scoped>
.el-carousel__item {
  .img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}

</style>
