<template>
  <div class="container">
    <v-banner></v-banner>
    <div class="conent-wrapper">
      <v-title bg-title="Photo Wall" title="照片墙"></v-title>
      <el-row :gutter="20">
        <el-col :span="8" v-for="(item, index) in photoWalls" :key="index">
          <div data-aos="zoom-in-down">
            <v-portfolio v-bind="item"></v-portfolio>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="conent-wrapper">
      <v-title bg-title="Latest News" title="最新资讯"></v-title>
      <el-row :gutter="20">
        <el-col :span="8" v-for="(item, index) in news" :key="index">
          <div data-aos="zoom-in-down">
            <v-card v-bind="item"></v-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import VBanner from '@/components/banner'
import VCard from '@/components/card'
import VPortfolio from '@/components/card/portfolio'
import VTitle from '@/components/title'
export default {
  components: {
    VBanner,
    VCard,
    VTitle,
    VPortfolio
  },
  data () {
    return {
      photoWalls: [
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/pexels-photo-357428.jpeg', desc: '这是一段描述' },
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/pexels-photo-760709.jpeg', desc: '这是一段描述' },
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/pexels-photo-356147.jpeg', desc: '这是一段描述' },
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/pexels-photo-714644.jpeg', desc: '这是一段描述' },
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/pexels-photo-826114.jpeg', desc: '这是一段描述' },
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/pexels-photo-159984.jpeg', desc: '这是一段描述' },
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/st-petersburg-russia-nonoj-petersburg-evening-city-our-savior-on-the-blood.jpg', desc: '这是一段描述' },
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/pexels-photo-1074920.jpeg', desc: '这是一段描述' },
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/pexels-photo-159984.jpeg', desc: '这是一段描述' },
      ],
      news: [
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/pexels-photo-221446-300x200.jpeg', title: '漂亮小姐姐在画画', desc: '这是一段非常优美的描述', author: '张梓淇', address: '北京', time: '23分钟'},
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/pexels-photo-1802241-300x200.jpeg', title: '一对帅哥美女', desc: '这是一段非常优美的描述', author: '王美丽', address: '澳门', time: '2天'},
        { imgUrl: 'https://lauren.oceanwp.org/wp-content/uploads/2018/12/pexels-photo-714644-300x200.jpeg', title: '乐山大佛一日游', desc: '这是一段非常优美的描述这是一段非常优美的描述', author: '李晓慧', address: '佛山', time: '2小时'}
      ]
    }
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
