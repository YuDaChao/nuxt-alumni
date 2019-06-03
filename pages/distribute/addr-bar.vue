<template>
  <v-chart class="chart" auto-resize :options="option"/>
</template>

<script>
import Echarts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
export default {
  name: 'addr-bar',
  components: {
    'v-chart': Echarts
  },
  data () {
    const myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC']
    return {
      option: {
        grid: {
          left: '12%',
          top: '12%',
          right: '0%',
          bottom: '8%',
          containLabel: true
        },
        xAxis: [{
          show: false
        }],
        yAxis: [{
          axisTick: 'none',
          axisLine: 'none',
          offset: '20',
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: '12'
            }
          },
          data: ['湖北', '湖南', '北京', '上海', '深圳', '云南', '长沙', '广州', '合肥', '西藏']
        }, {
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: '16'
            }
          },
          data: []
        }, {
          name: '校友人数TOP 10',
          nameGap: '30',
          nameTextStyle: {
            align: 'center',
            color: '#ffffff',
            fontSize: '14'
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0)'
            }
          },
          data: []
        }],
        series: [{
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72],
          label: {
            normal: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#ffffff',
                fontSize: '12'
              }
            }
          },
          barWidth: 4,
          itemStyle: {
            normal: {
              color: function (params) {
                const num = myColor.length
                return myColor[params.dataIndex % num]
              }
            }
          },
          z: 2
        }, {
          name: '白框',
          type: 'bar',
          yAxisIndex: 1,
          barGap: '-100%',
          data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
          barWidth: 10,
          itemStyle: {
            normal: {
              color: '#0e2147',
              barBorderRadius: 5
            }
          },
          z: 1
        }, {
          name: '外框',
          type: 'bar',
          yAxisIndex: 2,
          barGap: '-100%',
          data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
          barWidth: 12,
          itemStyle: {
            normal: {
              color: function (params) {
                const num = myColor.length
                return myColor[params.dataIndex % num]
              },
              barBorderRadius: 5
            }
          },
          z: 0
        }, {
          name: '外圆',
          type: 'scatter',
          hoverAnimation: false,
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          yAxisIndex: 2,
          symbolSize: 10,
          itemStyle: {
            normal: {
              color: function (params) {
                const num = myColor.length
                return myColor[params.dataIndex % num]
              },
              opacity: 1
            }
          },
          z: 2
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
