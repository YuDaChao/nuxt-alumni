<template>
  <div class="portfolio-wrapper">
    <div class="portfolio-entry-inner">
      <div class="portfolio-entry-thumbnail">
        <div class="img" :style="bgImgStyle"></div>
        <div class="triangle-wrap"></div>
        <div class="overlay">
          <div class="portfolio-overlay-content">
            <i class="el-icon-view icon"></i>
          </div>
        </div>
      </div>
      <div class="portfolio-content">
        <h3 class="portfolio-entry-title"> {{desc}} </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  props: {
    imgUrl: {
      type: String,
    },
    desc: {
      type: String
    }
  },
  computed: {
    bgImgStyle () {
      return {
        backgroundImage: `url(${this.imgUrl})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-wrapper {
  padding: 10px;
  .portfolio-entry-inner {
    width: 100%;
    .portfolio-entry-thumbnail {
      position: relative;
      .img {
        width: 100%;
        height: 235px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .triangle-wrap {
        position: absolute;
        bottom: 0;
        left: 15%;
        width: 0;
        height: 0;
        border-style: solid;
        border-color: transparent;
        border-bottom-width: 8px;
        border-bottom-color: #f9f9f9;
        border-left-width: 8px;
        border-right-width: 8px;
        z-index: 100;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-color: rgba(0,0,0,0.4);
        z-index: 1;
        transition: opacity 0.3s ease-in-out;
        .portfolio-overlay-content {
          position: absolute;
          left: 50%;
          top: 50%;
          margin: -23px 0 0 -23px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          opacity: 0;
          border: 1px solid rgba(255,255,255,.4);
          background-color: rgba(255,255,255,.2);
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(0);
          .icon {
            color: #fff;
          }
          &:hover {
            cursor: pointer;
            background-color: rgba(255,255,255,.4);
          }
        }
      }
      &:hover {
        .overlay {
          opacity: 1;
          .portfolio-overlay-content {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }
    .portfolio-content {
      background-color: #f9f9f9;
      padding: 25px;
      .portfolio-entry-title {
        line-height: 1.5;
        color: #1b1b1b;
        font-weight: 400;
        font-size: 16px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
</style>
