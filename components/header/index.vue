<template>
  <div class="header-wrapper">
    <v-logo></v-logo>
    <v-nav></v-nav>
  </div>
</template>

<script>
import VNav from '@/components/header/nav'
import VLogo from '@/components/header/logo'
export default {
  name: 'v-header',
  components: {
    VNav,
    VLogo
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
</style>
