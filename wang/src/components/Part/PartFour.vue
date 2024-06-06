
<template>
  <div :class="partFive">
    <h3 class="text-center text-top">项目介绍</h3>
    <p>
      <a href="javascript:void(0)">北京联方智慧科技有限公司</a>
      <span class="text-small">| 2023/04 - 至今</span>
    </p>
    <p class="text-small">工作内容：Vue + ECharts</p>
    <p class="text-small">成就：</p>
    <p class="text-small">&emsp;1. 首页数据可视化模块，首屏显示速度增加，与后端协同开发</p>
    <p class="text-small">&emsp;2. ECharts 报表汇总。使用 Vue + ECharts 进行报表设计</p>
    <p class="text-small">&emsp;3. 项目的样式更替</p>
  </div>
</template>

<script>
export default {
  name: "PartFour",
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
  padding: 10px;
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
