<template>
  <div :class="partFive">
    <h3 class="text-center text-top">项目介绍</h3>
    <div>
      <span style="color: cornflowerblue">河北高速集团智慧安全双控系统 </span>
    </div>
    <div class="text-small"><span class="font-bold">项目介绍：</span>面对河北高速集团各个集团的事故、信息、教育等的一些汇总。</div>
    <div class="text-small font-bold">主要负责：</div>
    <div class="text-small"  style="text-indent: 32px"><span class="font-bold">1. </span>负责了首页数据可视化模块。使用 Echarts 图表库实现了多种数据可视化效果，包括柱状图、折线图、饼图等，可以让用户更好地了解数据情况。</div>
    <div class="text-small"  style="text-indent: 32px"><span class="font-bold">2. </span>实现了地图的下钻、缩放返回上一级数据、地图经纬度的标点及互动。</div>
    <div class="text-small"  style="text-indent: 32px"><span class="font-bold">3. </span>进行项目优化：包括路由懒加载，代码的封装复用，首屏显示速度增加(5s-->1s)。。</div>
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
  height: 330px;
  background: rgba(24,32,45,.3);
}
.part-five div{
  padding: 0 16px;
}
.part-five-responsive {
  width: 100%;
  background: #18202d;
}
.text-center {
  width: 100%;
  margin-top: 15px;
  display: inline-block;
  text-align: center;
}
.text-small {
  font-size: 0.9em;
  color: rgb(253, 239, 239);
}

.font-bold {
  font-weight: bold;
  color: deepskyblue;
}
</style>
