<template>
  <!-- 图表的容器，一定要有宽高 -->
  <div class="chartBox">
    <div id="pillarsChart" :style="{ width: '100%', height: '100%' }"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.pillarsEcharts();
  },
  methods: {
    //图表方法
    pillarsEcharts() {
      //获取id并初始化图表
      var myChart = this.$echarts.init(document.getElementById("pillarsChart"));
      //配置项
      let option = {
        title: {
          // 标题文本
          text: "技能分布图",
          // 标题样式
          textStyle: {
            color: "#fff"
          },
          // 标题位置
          x: "center",
          top:60,
        },
        // 移动显示
        tooltip: {
          trigger: "item",
          // 显示文字样式
          formatter: "{a} <br/>{b} : {d}%"
        },
        // 注记
        legend: {
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#fff"
          },
          data: [ "HTML5", "CSS3", "JavaScript", "Node", "微信小程序", "Echarts" ,"Vue2","Vue3",'npm']
        },
        // 注记显示手柄
        calculable: true,
        // 图形系列
        series: [
          {
            name: "技能分布",
            type: "pie",
            radius: [30, 110],
            roseType: "area",
            data: [
              { value: 25, name: "HTML5" },
              { value: 25, name: "CSS3" },
              { value: 30, name: "JavaScript" },
              { value: 40, name: "Vue2" },
              { value: 43, name: "Vue3" },
              { value: 25, name: "Node" },
              { value: 15, name: "微信小程序" },
              { value: 35, name: "Echarts" },
              { value: 25, name: "npm" },
            ]
          }
        ],
      };
      myChart.setOption(option); //通过setOption()方法生成图表
      window.addEventListener("resize", function () {
        myChart.resize(); //图表自适应的一个方法
      });
    },
  },
};
</script>
<style scoped>
.chartBox {
             width: 100%;
             height: 600px;
  background: rgba(24,32,45,.3);
}
</style>
