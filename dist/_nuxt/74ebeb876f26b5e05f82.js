(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{492:function(t,e,n){var content=n(522);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("5b788bfa",content,!0,{sourceMap:!1})},521:function(t,e,n){"use strict";var o=n(492);n.n(o).a},522:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,".chart[data-v-20b757d2]{width:100%;height:100%}",""])},603:function(t,e,n){"use strict";n.r(e);var o=n(166),r=(n(498),n(500),n(490),n(491),{name:"addr-bar",components:{"v-chart":o.a},data:function(){var t=["#eb2100","#eb3600","#d0570e","#d0a00e","#34da62","#00e9db","#00c0e9","#0096f3","#33CCFF","#33FFCC"];return{option:{grid:{left:"12%",top:"12%",right:"0%",bottom:"8%",containLabel:!0},xAxis:[{show:!1}],yAxis:[{axisTick:"none",axisLine:"none",offset:"20",axisLabel:{textStyle:{color:"#ffffff",fontSize:"12"}},data:["湖北","湖南","北京","上海","深圳","云南","长沙","广州","合肥","西藏"]},{axisTick:"none",axisLine:"none",axisLabel:{textStyle:{color:"#ffffff",fontSize:"16"}},data:[]},{name:"校友人数TOP 10",nameGap:"30",nameTextStyle:{align:"center",color:"#ffffff",fontSize:"14"},axisLine:{lineStyle:{color:"rgba(0,0,0,0)"}},data:[]}],series:[{name:"条",type:"bar",yAxisIndex:0,data:[4,13,25,29,38,44,50,52,60,72],label:{normal:{show:!0,position:"right",textStyle:{color:"#ffffff",fontSize:"12"}}},barWidth:4,itemStyle:{normal:{color:function(e){var n=t.length;return t[e.dataIndex%n]}}},z:2},{name:"白框",type:"bar",yAxisIndex:1,barGap:"-100%",data:[99,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5,99.5],barWidth:10,itemStyle:{normal:{color:"#0e2147",barBorderRadius:5}},z:1},{name:"外框",type:"bar",yAxisIndex:2,barGap:"-100%",data:[100,100,100,100,100,100,100,100,100,100],barWidth:12,itemStyle:{normal:{color:function(e){var n=t.length;return t[e.dataIndex%n]},barBorderRadius:5}},z:0},{name:"外圆",type:"scatter",hoverAnimation:!1,data:[0,0,0,0,0,0,0,0,0,0],yAxisIndex:2,symbolSize:10,itemStyle:{normal:{color:function(e){var n=t.length;return t[e.dataIndex%n]},opacity:1}},z:2}]}}}}),l=(n(521),n(5)),component=Object(l.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("v-chart",{staticClass:"chart",attrs:{"auto-resize":"",options:this.option}})},[],!1,null,"20b757d2",null);e.default=component.exports}}]);