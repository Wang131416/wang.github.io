<template>
  <div :class="partFive">
    <h3 class="text-center text-top">项目介绍</h3>
    <p>
      <span>河北高速集团智慧安全双控系统 </span>
    </p>
    <p class="text-small">项目介绍：面对河北高速集团各个集团的事故、信息、教育等的一些汇总。</p>
    <p class="text-small">主要负责：</p>
    <p class="text-small">1. 负责了首页数据可视化模块。使用 Echarts 图表库实现了多种数据可视化效果，包括柱状图、折线图、饼图等，可以让用户更好地了解数据情况。</p>
    <p class="text-small">2. 实现了地图的下钻、缩放返回上一级数据、地图经纬度的标点及互动。</p>
    <p class="text-small">3. 进行项目优化：包括路由懒加载，代码的封装复用，首屏显示速度增加(5s-->1s)。。</p>
  </div>
</template>

<script>
export default {
  name: "PartFive",
  data() {
    return {
      partFive: "part-five",
      curWidth: 0
    };
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if(this.curWidth < 1000) {
      this.partFive = "part-five-responsive"
    }
  }
};
</script>

<style scoped>
a {
  color: deepskyblue;
}
a:hover {
  color: rgb(118, 190, 248);
}
.part-five {
  width: 100%;
  height: 310px;
  border: 40px solid transparent;
  background: #18202d;
}
.part-five-responsive {
  width: 100%;
  border: 40px solid transparent;
  background: #18202d;
}
.text-center {
  text-align: center;
}
.text-small {
  font-size: 0.9em;
  color: rgb(253, 239, 239);
}
</style>
