<template>
  <v-chart class='chart' auto-resize :options='option'/>
</template>

<script>
import echarts from 'echarts'
import Echarts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
export default {
  name: 'money-bar-line',
  components: {
    'v-chart': Echarts
  },
  data () {
    return {
      option: {
        title: {
          text: '校友捐赠分布',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          top: '25%',
          bottom: '10%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true
            }
          }
        },
        legend: {
          data: ['人数', '捐赠金额'],
          top: '10%',
          textStyle: {
            color: '#ffffff'
          }
        },
        xAxis: {
          data: [
            '北京',
            '上海',
            '湖南',
            '湖北',
            '四川',
            '深圳',
            '广州',
            '云南'
          ],
          axisLine: {
            show: true // 隐藏X轴轴线
          },
          axisTick: {
            show: true // 隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ebf8ac' // X轴文字颜色
            }
          }
        },
        yAxis: [{
          type: 'value',
          name: '万元',
          nameTextStyle: {
            color: '#ebf8ac'
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: true
          },
          axisLine: {
            show: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ebf8ac'
            }
          }
        },
        {
          type: 'value',
          name: '人数',
          nameTextStyle: {
            color: '#ebf8ac'
          },
          position: 'right',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            formatter: '{value}', // 右侧Y轴文字显示
            textStyle: {
              color: '#ebf8ac'
            }
          }
        },
        {
          type: 'value',
          gridIndex: 0,
          min: 50,
          max: 100,
          splitNumber: 8,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
            }
          }
        }
        ],
        series: [{
          name: '人数',
          type: 'line',
          yAxisIndex: 1, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
          smooth: true, // 平滑曲线显示
          showAllSymbol: true, // 显示所有图形。
          symbol: 'circle', // 标记的图形为实心圆
          symbolSize: 10, // 标记的大小
          itemStyle: {
            // 折线拐点标志的样式
            color: '#058cff'
          },
          lineStyle: {
            color: '#058cff'
          },
          areaStyle: {
            color: 'rgba(5,140,255, 0.2)'
          },
          data: [42, 38, 48, 35, 29, 28, 30, 50]
        },
        {
          name: '捐赠金额',
          type: 'bar',
          barWidth: 15,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00FFE3'
              },
              {
                offset: 1,
                color: '#4693EC'
              }
              ])
            }
          },
          data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
        }]
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
