<template>
  <div :class="partSeven">
    <h3 class="text-center">求职意向</h3>
    <p class="text-small"><span class="font-bold">期望职位：</span>前端工程师</p>
    <p class="text-small"><span class="font-bold">工作技能：</span>Vue</p>
    <p class="text-small"><span class="font-bold">目标城市：</span>济南</p>
    <p class="text-small"><span class="font-bold">期望薪资：</span>7K - 9K</p>
    <p class="text-small"><span class="font-bold">入职时间：</span>随时入职</p>
  </div>
</template>

<script>
export default {
  name: "partSeven",
  data() {
    return {
      partSeven: "part-seven",
      curWidth: 0
    };
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if(this.curWidth < 1000) {
      this.partSeven = "part-sevev-responsive"
    }
  }
};
</script>

<style scoped>
.part-seven {
  width: 100%;
  height: 330px;
  background: rgba(24,32,45,.3);
}
.part-sevev-responsive {
  width: 100%;
  background: rgba(24,32,45,.3);
}
.text-center {
  width: 100%;
  margin-top: 15px;
  display: inline-block;
  text-align: center;
}
.text-small {
  font-size: .9em;
}
.font-bold {
  text-align: center;
  color: deepskyblue;
}
</style>
