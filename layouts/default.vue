<template>
  <el-container>
    <el-header :style="headerStyle">
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
import { mapState, mapMutations } from 'vuex'
import VHeader from '@/components/header'
import VFooter from '@/components/footer'
export default {
  name: 'default',
  components: {
    VHeader,
    VFooter
  },
  computed: {
    ...mapState({
      position: state => state.nav.position,
      backgroundColor: state => state.nav.backgroundColor,
      menuHeight: state => state.nav.menuHeight
    }),
    headerStyle () {
      return {
        position: this.position,
        backgroundColor: this.backgroundColor,
        height: `${this.menuHeight}px`
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    ...mapMutations({
      changePosition: 'nav/changePosition',
      changeBackgroundColor: 'nav/changeBackgroundColor',
      changeMenuHeight: 'nav/changeMenuHeight'
    }),
    handleScroll (e) {
      if (process.client) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 0 && this.position !== 'fixed') {
          this.changePosition('fixed')
          this.changeBackgroundColor('#ffffff')
          this.changeMenuHeight(60)
        }
        if (scrollTop === 0) {
          this.changePosition('absolute')
          this.changeBackgroundColor('#58585840')
          this.changeMenuHeight(74)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #58585840;
  box-shadow: 0 2px 27px 0 rgba(0,0,0,.1);
  z-index: 10;
  transition: all .3s ease-in-out
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
  background-color: #fff;
}
</style>
