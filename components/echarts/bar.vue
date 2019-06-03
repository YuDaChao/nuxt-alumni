<template>
  <v-chart auto-resize :options="option"/>
</template>

<script>
import Echarts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
export default {
  name: 'v-bar',
  props: {
    option: {
      type: Object,
      default: {}
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
