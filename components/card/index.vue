<template>
  <div class="card-wrapper">
    <div class="card-content">
      <div class="card-media">
        <div class="img" :style="bgImgStyle"></div>
        <a href="#" class="author-link">
          <img src="https://secure.gravatar.com/avatar/3fcda04acc4367da1ee607997c762123?s=100&d=mm&r=g" />
        </a>
        <span class="overlay">
          <span class="overlay-btn">查看详情</span>
        </span>
      </div>
      <div class="card-detail">
        <h2 class="detail-title">{{ title }}</h2>
        <div class="detail-except">{{ desc }}</div>
      </div>
      <div class="card-meta">
        <div class="meta-item">
          <i class="el-icon-share"></i>
          <span class="author">{{ author }} / {{ address }}</span>
        </div>
        <div class="meta-item">
          <i class="el-icon-time"></i>
          <span>{{ time }}前</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    imgUrl: {
      type: String,
    },
    title: {
      type: String
    },
    desc: {
      type: String
    },
    author: {
      type: String
    },
    address: {
      type: String
    },
    time: {
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
.card-wrapper {
  padding: 0 10px;
  margin-bottom: 20px;
  .card-content {
    border: 1px solid #eaeaea;
    text-align: center;
    .card-media {
      position: relative;
      margin-bottom: 45px;
      .img {
        width: 100%;
        max-width: 100%;
        height: 235px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .author-link {
        position: absolute;
        left: 50%;
        bottom: -35px;
        margin-left: -35px;
        display: block;
        width: 70px;
        height: 70px;
        border: 5px solid #fff;
        border-radius: 50%;
        z-index: 3;
        img {
          border-radius: 50%;
          width: 100%;
          max-width: 100%;
          height: auto;
        }
      }
      .overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
        opacity: 0;
        .overlay-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 150px;
          transform: translate3d(-50%, -50%, 0);
          padding: 10px 12px;
          font-size: 12px;
          font-weight: 600;
          color: #fff;
          border: 1px solid #fff;
          cursor: pointer;
          z-index: 2;
          border-radius: 30px;
          &:hover {
            color: #333;
            background-color: #fff;
            border: 1px solid #fff;
            transition: all 0.3s ease;
          }
        }
      }
      &:hover {
        .overlay {
          opacity: 1;
          transition: all 0.3s ease-in-out;
          .overlay-btn {
            transition: all 0.3s ease;
          }
        }
      }
    }
    .card-detail {
      padding: 0 20px 0 20px;
      min-height: 110px;
      .detail-title {
        font-size: 16px;
        font-weight: 400;
        margin: 0 0 15px;
        color: #333;
      }
      .detail-except {
        text-align: center;
        color: #929292;
        font-size: 14px
      }
    }
    .card-meta {
      display: flex;
      justify-content: space-between;
      background-color: #f9f9f9;
      padding: 10px 20px;
      .meta-item {
        color: #aaa;
        font-size: 13px;
      }
    }
  }
}
</style>
