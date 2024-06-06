<template>
  <div class="managingPatientSize">
        <div id="china-map" style="width: 100%;height: 600px"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import "../../public/static/china";
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawCharts();
  },
  methods: {
    drawCharts() {
      // 基于准备好的dom，初始化echarts实例
      var chinaMap = echarts.init(document.getElementById("china-map"));
      window.onresize = chinaMap.resize; // 窗口或框架被调整大小时执行chinaMap.resize
      chinaMap.setOption({
        // 进行相关配置
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["orangered", "#FF9B52", "#FFD068"],
        },
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "#fff",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "#293171",
              borderWidth: "2",
              areaColor: "#0A0F33",
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: "好友位置", // 浮动框的标题
            type: "map",
            geoIndex: 0,
            data: [
              {
                name: "北京",
                value: 24,
              },
              {
                name: "上海",
                value: 51,
              },
              {
                name: "黑龙江",
                value: 20,
              },
              {
                name: "深圳",
                value: 34,
              },
              {
                name: "湖北",
                value: 2,
              },
              {
                name: "四川",
                value: 15,
              },
              {
                name: "内蒙古",
                value: 4,
              },
              {
                name: "山东",
                value: 14,
              },
              {
                name: "天津",
                value: 25,
              },{
                name: "重庆",
                value: 43,
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.managingPatientSize {
  height: 100%;
  color: #fff;
  position: relative;
  background: #18202d;
}
#china-map {
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
