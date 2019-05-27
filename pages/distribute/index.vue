<template>
  <div class="distribute-wrapper">
    <img class="img" src="http://www1.hbuas.edu.cn/images/20180913112456.jpg" />
    <div class="conent-wrapper">
      <v-title bg-title="Alumni Distribute" title="校友分布"></v-title>
    </div>
    <no-ssr>
      <div class="chart-bg map">
        <div data-aos="fade-down" class="chart-wrapper">
          <v-map :option="mapOption"></v-map>
        </div>
      </div>
    </no-ssr>
    <div class="conent-wrapper">
      <v-title bg-title="Alumni Donation" title="校友捐赠"></v-title>
    </div>
    <no-ssr>
      <div class="chart-bg bar">
        <div data-aos="fade-down" class="chart-wrapper">
          <v-bar :option="barOption"></v-bar>
        </div>
      </div>
    </no-ssr>
    <div class="conent-wrapper">
      <v-title bg-title="Alumni News" title="校友动态"></v-title>
      <div class="time-card-wrapper">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <div data-aos="fade-left">
              <el-card>
                <h4>更新 个人信息</h4>
                <p>王小虎 更新于 2018/4/12 20:46</p>
              </el-card>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <div data-aos="fade-left">
              <el-card>
                <h4>更新 个人信息</h4>
                <p>王小虎 更新于 2018/4/12 20:46</p>
              </el-card>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <div data-aos="fade-left">
              <el-card>
                <h4>更新 个人信息</h4>
                <p>王小虎 更新于 2018/4/12 20:46</p>
              </el-card>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <div data-aos="fade-left">
              <el-card>
                <h4>更新 个人信息</h4>
                <p>王小虎 更新于 2018/4/12 20:46</p>
              </el-card>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <div data-aos="fade-left">
              <el-card>
                <h4>更新 个人信息</h4>
                <p>王小虎 更新于 2018/4/12 20:46</p>
              </el-card>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import VTitle from '@/components/title'
import VMap from '@/components/echarts/map'
import VBar from '@/components/echarts/bar'
export default {
  name: 'distribute',
  components: {
    VTitle,
    VMap,
    VBar
  },
  data () {
    const  ds = [
      {name:"北京",value:177},
      {name:"天津",value:42},
      {name:"河北",value:102},
      {name:"山西",value:81},
      {name:"内蒙古",value:47},
      {name:"辽宁",value:67},
      {name:"吉林",value:82},
      {name:"黑龙江",value:66},
      {name:"上海",value:24},
      {name:"江苏",value:92},
      {name:"浙江",value:114},
      {name:"安徽",value:109},
      {name:"福建",value:116},
      {name:"江西",value:91},
      {name:"山东",value:119},
      {name:"河南",value:137},
      {name:"湖北",value:116},
      {name:"湖南",value:114},
      {name:"重庆",value:91},
      {name:"四川",value:125},
      {name:"贵州",value:62},
      {name:"云南",value:83},
      {name:"西藏",value:9},
      {name:"陕西",value:80},
      {name:"甘肃",value:56},
      {name:"青海",value:10},
      {name:"宁夏",value:18},
      {name:"新疆",value:67},
      {name:"广东",value:123},
      {name:"广西",value:59},
      {name:"海南",value:14},
      ]
   return {
     mapOption: {},
     barOption: {
  
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
       grid: {
        top:80,
    },   
    legend: {
        data:['人数','捐赠总额'],
         top: 20,
        itemGap: 10,
        borderRadius: 4,
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 14,
        }
       
       
    },
     "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#fff'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
             rotate: 40,
            textStyle:{
                fontSize:10
            }
        },
        "data": ds.map(item => item.name),
    }],
    yAxis: [
        {
            type: 'value',
            name: '人数',
          
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
             "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '金额(万元)',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
             "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {name:'人数',
            type:'bar',
            barGap: .4,
            barCategoryGap: '2%',
            barWidth: 12,
            data: ds.map(item => item.value),
             itemStyle: { //图形样式
                normal: {
                    barBorderRadius: 8,
                    color: '#3FA7DC'
                },
            }
        
        },
        {
        name:'捐赠总额',
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    opacity: 0.4,
                    color: '#5793f3'
                }
            },
        data: ds.map(item => item.value + 130)
    }]
}
   }
  },
  mounted () {
    this.initMapOption()
  },
  methods: {
    initMapOption () {
      const subname_fontSize = 15
      const name_fontSize = 18
      const mapName = 'china'
      const max = 480
      const min = 9
      const maxSize4Pin = 100
      const minSize4Pin = 20;
      let data = [
      {name:"北京",value:177},
      {name:"天津",value:42},
      {name:"河北",value:102},
      {name:"山西",value:81},
      {name:"内蒙古",value:47},
      {name:"辽宁",value:67},
      {name:"吉林",value:82},
      {name:"黑龙江",value:66},
      {name:"上海",value:24},
      {name:"江苏",value:92},
      {name:"浙江",value:114},
      {name:"安徽",value:109},
      {name:"福建",value:116},
      {name:"江西",value:91},
      {name:"山东",value:119},
      {name:"河南",value:137},
      {name:"湖北",value:116},
      {name:"湖南",value:114},
      {name:"重庆",value:91},
      {name:"四川",value:125},
      {name:"贵州",value:62},
      {name:"云南",value:83},
      {name:"西藏",value:9},
      {name:"陕西",value:80},
      {name:"甘肃",value:56},
      {name:"青海",value:10},
      {name:"宁夏",value:18},
      {name:"新疆",value:67},
      {name:"广东",value:123},
      {name:"广西",value:59},
      {name:"海南",value:14},
      ]
      const geoCoordMap = {
        上海:  [121.472644, 31.231706],
云南:  [102.712251, 25.040609],
内蒙古:  [111.670801, 40.818311],
北京:  [116.405285, 39.904989],
台湾:  [121.509062, 25.044332],
吉林:  [125.3245, 43.886841],
四川:  [104.065735, 30.659462],
天津:  [117.190182, 39.125596],
宁夏:  [106.278179, 38.46637],
安徽:  [117.283042, 31.86119],
山东:  [117.000923, 36.675807],
山西:  [112.549248, 37.857014],
广东:  [113.280637, 23.125178],
广西:  [108.320004, 22.82402],
新疆:  [87.617733, 43.792818],
江苏:  [118.767413, 32.041544],
江西:  [115.892151, 28.676493],
河北:  [114.502461, 38.045474],
河南:  [113.665412, 34.757975],
浙江:  [120.153576, 30.287459],
海南:  [110.33119, 20.031971],
湖北:  [114.298572, 30.584355],
湖南:  [112.982279, 28.19409],
澳门:  [113.54909, 22.198951],
甘肃:  [103.823557, 36.058039],
福建:  [119.306239, 26.075302],
西藏:  [91.132212, 29.660361],
贵州:  [106.713478, 26.578343],
辽宁:  [123.429096, 41.796767],
重庆:  [106.504962, 29.533155],
陕西:  [108.948024, 34.263161],
青海:  [101.778916, 36.623178],
香港:  [114.173355, 22.320048],
黑龙江:  [126.642464, 45.756967]
      }

      const toolTipData = [ 
    {name:"北京",value:[{name:"男",value:95},{name:"女",value:82}]},
    {name:"天津",value:[{name:"男",value:22},{name:"女",value:20}]},
    {name:"河北",value:[{name:"男",value:60},{name:"女",value:42}]},
    {name:"山西",value:[{name:"男",value:40},{name:"女",value:41}]},
    {name:"内蒙古",value:[{name:"男",value:23},{name:"女",value:24}]},
    {name:"辽宁",value:[{name:"男",value:39},{name:"女",value:28}]},
    {name:"吉林",value:[{name:"男",value:41},{name:"女",value:41}]},
    {name:"黑龙江",value:[{name:"男",value:35},{name:"女",value:31}]},
    {name:"上海",value:[{name:"男",value:12},{name:"女",value:12}]},
    {name:"江苏",value:[{name:"男",value:47},{name:"女",value:45}]},
    {name:"浙江",value:[{name:"男",value:57},{name:"女",value:57}]},
    {name:"安徽",value:[{name:"男",value:57},{name:"女",value:52}]},
    {name:"福建",value:[{name:"男",value:59},{name:"女",value:57}]},
    {name:"江西",value:[{name:"男",value:49},{name:"女",value:42}]},
    {name:"山东",value:[{name:"男",value:67},{name:"女",value:52}]},
    {name:"河南",value:[{name:"男",value:69},{name:"女",value:68}]},
    {name:"湖北",value:[{name:"男",value:60},{name:"女",value:56}]},
    {name:"湖南",value:[{name:"男",value:62},{name:"女",value:52}]},
    {name:"重庆",value:[{name:"男",value:47},{name:"女",value:44}]},
    {name:"四川",value:[{name:"男",value:65},{name:"女",value:60}]},
    {name:"贵州",value:[{name:"男",value:32},{name:"女",value:30}]},
    {name:"云南",value:[{name:"男",value:42},{name:"女",value:41}]},
    {name:"西藏",value:[{name:"男",value:5},{name:"女",value:4}]},
    {name:"陕西",value:[{name:"男",value:38},{name:"女",value:42}]},
    {name:"甘肃",value:[{name:"男",value:28},{name:"女",value:28}]},
    {name:"青海",value:[{name:"男",value:5},{name:"女",value:5}]},
    {name:"宁夏",value:[{name:"男",value:10},{name:"女",value:8}]},
    {name:"新疆",value:[{name:"男",value:36},{name:"女",value:31}]},
    {name:"广东",value:[{name:"男",value:63},{name:"女",value:60}]},
    {name:"广西",value:[{name:"男",value:29},{name:"女",value:30}]},
    {name:"海南",value:[{name:"男",value:8},{name:"女",value:6}]},
];

      const convertData = function (data) {
        let res = []
        for (let i = 0; i < data.length; i++) {
          let geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }
      const option = {
        tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (typeof(params.value)[2] == "undefined") {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                for(var i = 0;i<toolTipData.length;i++){
                    if(params.name==toolTipData[i].name){
                        toolTiphtml += toolTipData[i].name+':<br>'
                        for(var j = 0;j<toolTipData[i].value.length;j++){
                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                        }
                    }
                }
                return toolTiphtml;
            }
        }
    },
     visualMap: {
            min: 0,
            max: 200,
            left: 20,
            bottom: 20,
            calculable: true,
            show: false,
            text: ['高', '低'],
            inRange: {
                color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
            },
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: false,
        itemStyle: {
						normal: {
						borderColor: 'rgba(147, 235, 248, 1)',
						borderWidth: 1,
						areaColor: {
							type: 'radial',
							x: 0.5,
							y: 0.5,
							r: 0.8,
							colorStops: [{
								offset: 0,
								color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
							}, {
								offset: 1,
								color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						},
						shadowColor: 'rgba(128, 217, 248, 1)',
						// shadowColor: 'rgba(255, 255, 255, 1)',
						shadowOffsetX: -2,
						shadowOffsetY: 2,
						shadowBlur: 10
					},
					emphasis: {
						areaColor: '#389BB7',
						borderWidth: 0
					}
            }
    },
        series: [
          {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
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
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
              normal: {
                  areaColor: '#031525',
                  borderColor: '#FFFFFF',
              },
              emphasis: {
                  areaColor: '#2B91B7'
              }
          },
            animation: false
        }
    ]
      }
      this.mapOption = option
    }
  }
}
</script>

<style lang="scss" scoped>
.distribute-wrapper {
  .img {
    width: 100%;
  }
  .chart-bg {
    width: 100%;
    background-repeat: no-repeat;
    margin: 0 auto;
    &.map {
       background-image: url('~assets/images/bg2.jpg');
    }
    &.bar {
       background-image: url('~assets/images/bg3.jpg');
    }
    .chart-wrapper {
      height: 600px;
      width: 900px;
      margin-bottom: 80px;
      margin: 0 auto;
    }
  }
  .conent-wrapper {
    width: 1140px;
    margin: 0 auto;
    padding: 80px 0;
  }
}

</style>
