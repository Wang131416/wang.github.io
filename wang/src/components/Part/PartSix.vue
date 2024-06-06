<template>
  <div :class="partSix">
    <h3 class="text-center">编程技能</h3>
    <p class="font-small"><span class="font-bold">1：</span>熟练使用 Vue全家桶，如 Vue2、Vue3、生命周期、Vuex、vue-router等</p>
    <p class="font-small"><span class="font-bold">2：</span>熟悉 Vue2、Vue3部分底层源码，如：双向数据绑定原理、Diff算法</p>
    <p class="font-small"><span class="font-bold">3：</span>掌握ES5、ES6 的特性，包括Promise、箭头函数、事件轮询机制、作用域、原型及原型链、闭包等</p>
    <p class="font-small"><span class="font-bold">4：</span>熟悉使用Echarts的各种配置设置，最好的博客就是官网</p>
    <p class="font-small"><span class="font-bold">5：</span>熟练使用Git进行版本控制，能够进行团队协作和代码管理。如gitee、gitHub、gitLab。</p>
    <p class="font-small"><span class="font-bold">6：</span>项目加载速度的优化及网络请求的网络优化</p>
  </div>
</template>

<script>
export default {
  name: "partSix",
  data() {
    return {
      partSix: "part-six",
      curWidth: 0
    };
  },
  beforeMount() {
    this.curWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if(this.curWidth < 1000) {
      this.partSix = "part-six-responsive"
    }
  }
};
</script>

<style scoped>
.part-six {
  width: 100%;
  height: 330px;
  padding: 10px;
  background: #18202d;
}
.part-six-responsive {
  width: 100%;
  background: #18202d;
}
.text-center {
  text-align: center;
}
.font-small {
  font-size: .9em;
}
.font-bold {
  font-weight: bold;
  color: deepskyblue;
}
</style>
