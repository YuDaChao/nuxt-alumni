<template>
  <div class="big-data-screen-wrapper">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'big-data-screen'
}
</script>

<style lang="scss" scoped>
.big-data-screen-wrapper {
  height: 100%;
  width: 100%;
  background-image: url('~assets/images/bigDataScreen/bg.png');
  background-size: 100% 100%;
}
</style>
<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  min-height: 635px;
  font-family: "microsoft yahei", arial, sans-serif;
  background-color: #0f1c30;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  // overflow-x: hidden;
  // overflow-y: auto;
}
#__nuxt, #__layout {
  width: 100%;
  height: 100%;
}
</style>
