<template>
  <v-chart auto-resize :options="option"/>
</template>

<script>
import Echarts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/map/js/china.js'
export default {
  name: 'v-map',
  props: {
    option: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  components: {
    'v-chart': Echarts
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
