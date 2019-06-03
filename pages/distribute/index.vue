<template>
  <div class="distribute-wrapper">
    <div class="header">
      <div class="title">校友分布可视化</div>
    </div>
    <div class="content-wrapper">
      <div class="container">
        <el-row class="row-item" :gutter="20">
          <el-col class="col-item" :lg="4" :sm="24">
            <div class="panel-wrapper full-height">
              <div class="panel rank">
                <addr-bar></addr-bar>
              </div>
            </div>
          </el-col>
          <el-col class="col-item" :lg="12" :sm="24">
            <div class="panel-wrapper full-height">
              <div class="panel center">
                <addr-map></addr-map>
              </div>
            </div>
          </el-col>
          <el-col class="col-item" :lg="8" :sm="24">
            <div class="panel-wrapper half-height">
              <div class="panel right">
                <money-bar-line></money-bar-line>
              </div>
            </div>
            <div class="panel-wrapper half-height">
              <div class="panel right">
                <money-bar-line></money-bar-line>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import AddrBar from './addr-bar'
import AddrMap from './addr-map'
import MoneyBarLine from './money-bar-line'
export default {
  name: 'distribute',
  layout: 'big-data-screen',
  components: {
    AddrBar,
    AddrMap,
    MoneyBarLine
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.distribute-wrapper {
  height: 100%;
  .header {
    margin: 0 auto;
    width: 100%;
    height: 65px;
    max-width: 1920px;
    background: url('~assets/images/bigDataScreen/header.png') center no-repeat;
    .title {
      margin: 0;
      padding: 0;
      line-height: 50px;
      text-align: center;
      font-size: 24px;
      color: #5dc2fe;
    }
  }
  .content-wrapper {
    position: absolute;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 635px;
    .container {
      width: 100%;
      height: 100%;
      padding: 0 15px;
      .panel {
        padding:15px;
        height:100%;
        min-height:170px;
        background:url("~assets/images/bigDataScreen/panel.png") center no-repeat;
        background-size:100% 100%;
      }
    }
    .row-item {
      height: 100%;;
    }
    .col-item {
      height: 100%;
      .panel-wrapper {
        padding-bottom: 15px;
        &.full-height {
          height: 100%;
        }
        &.half-height {
          height: 50%;
        }
      }
    }
  }
}
</style>
