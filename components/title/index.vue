<template>
  <div class="title-wrapper">
    <div class="background-heading">{{bgTitle}}</div>
    <div class="main-heading">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'v-title',
  props: {
    bgTitle: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.title-wrapper {
  position: relative;
  width: 100%;
  text-align: center;
  padding-bottom: 48px;
  .background-heading {
    position: absolute;
    top: 0;
    width: 100%;
    font-size: 42px;
    font-weight: 700;
    line-height: 1;
    color: rgba(0,0,0,0.3);
    z-index: 0;
  }
  .main-heading {
    font-size: 23px;
    font-weight: 300;
    line-height: 70px;
    letter-spacing: 4px;
  }
}
</style>
