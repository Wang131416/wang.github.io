
<template>
  <div :class="partFive">
    <h3 class="text-center text-top">项目介绍</h3>
    <p>
      <a href="javascript:void(0)">北京联方智慧科技有限公司</a>
      <span class="text-small">| 2023/04 - 至今</span>
    </p>
    <div class="text-small">工作内容：Vue + ECharts</div>
    <div class="text-small">成就：</div>
    <div class="text-small" style="text-indent: 32px">&emsp;<span class="font-bold">1.</span> 首页数据可视化模块，首屏显示速度增加，与后端协同开发</div>
    <div class="text-small" style="text-indent: 32px"><span class="font-bold">2.</span> ECharts 报表汇总。使用 Vue + ECharts 进行报表设计</div>
    <div class="text-small" style="text-indent: 32px"><span class="font-bold">3. </span>项目的样式更替</div>
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
  padding-left: 15px;
  background: rgba(24,32,45,.3);
}
.part-five-responsive {
  width: 100%;
  border: 40px solid transparent;
  background: rgba(24,32,45,.3);
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
  text-align: center;
  color: deepskyblue;
}
</style>
