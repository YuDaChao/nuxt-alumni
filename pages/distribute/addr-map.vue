<template>
  <v-map :option="option"></v-map>
</template>

<script>
import VMap from '@/components/echarts/map'
import mapData from './map-data.js'
export default {
  name: 'addr-map',
  components: {
    VMap
  },
  data () {
    return {
      option: {
        title: {
          text: '校友分布图',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return `${params.name} : ${params.value[2]}人`
          }
        },
        visualMap: {
          min: 0,
          max: 200,
          left: 20,
          bottom: 20,
          calculable: true,
          text: ['高', '低'],
          inRange: {
            color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
          },
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
          roam: false, // 开启鼠标缩放和漫游
          zoom: 1, // 地图缩放级别
          selectedMode: false, // 选中模式：single | multiple
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          layoutCenter: ['50%', '50%'], // 设置后left/right/top/bottom等属性无效
          layoutSize: '100%',
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#101f32',
              borderWidth: 1.1,
              borderColor: '#43d0d6'
            },
            emphasis: {
              areaColor: '#069'
            }
          }
        },
        series: [{
          name: '校友人数',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: mapData,
          symbolSize: 12,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            emphasis: {
              borderColor: '#fff',
              borderWidth: 1
            }
          }
        },
        {
          type: 'map',
          map: 'china',
          geoIndex: 0,
          aspectScale: 0.75, // 长宽比
          tooltip: {
            show: false
          },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            }
          },
          data: []
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
