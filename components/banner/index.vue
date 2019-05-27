<template>
  <el-carousel :interval="5000" height="410px">
    <el-carousel-item>
      <img class="img" src="http://www1.hbuas.edu.cn/images/456.jpg" />
    </el-carousel-item>
    <el-carousel-item>
      <img class="img" src="http://www1.hbuas.edu.cn/20190321.jpg" />
    </el-carousel-item>
    <el-carousel-item>
      <img class="img" src="http://www1.hbuas.edu.cn/images/20180913112456.jpg" />
    </el-carousel-item>
    <el-carousel-item>
      <img class="img" src="http://www1.hbuas.edu.cn/dfiles/12817/news/2017/p041.jpg" />
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
