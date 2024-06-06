<template>
  <div class="app" id="app" ref="vantaRef">
    <div class="banner">

        <div class="logo-img"><img src="./assets/header_bg.png" /></div>
        <div class="logo-title">个人简历</div>
    </div>
    <!-- 第一行 -->
    <div class="topTitle">
      <div class="left">
        <router-view name="PartOne"/>
      </div>
      <div class="content">
      <router-view name="PartTwo"/>
      </div>
      <div class="right">
        <router-view name="PartThree"/>
      </div>
    </div>
    <!-- 第二行 -->
    <div class="bottomTitle">
      <div class="left1">
        <router-view name="PartFour"/>
      </div>
      <div class="left2">
        <router-view name="PartFive"/>
      </div>
      <div class="right1">
        <router-view name="PartSix"/>
      </div>
      <div class="right2">
        <router-view name="PartSeven"/>
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.birds'

export default {
  name: "App",
  data() {
    return {
    };
  },
  mounted() {
    this.vantaEffect = BIRDS({
      el: this.$refs.vantaRef,
      THREE: THREE
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },

};
</script>

<style>
body {
  background: #011128;
  color: #fff;
}
.app {
  width: 100%;
}
.part {
  padding: 20px;
}
.topTitle{
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}
.topTitle .left{
  width: 25%;
  height: 600px;
  padding-left: 20px;
}
.topTitle .right{
  width: 25%;
  height: 600px;
}
.topTitle .content{
  width: 43%;
  height: 600px;
}
.banner{
  height: 54px;
  display: flex;
  align-items: center;
  color: white;
}
.banner .logo-img {
  width: 54px;
  height: 54px;
}

.banner .logo-title {
  margin-left: 18px;
  margin-top: 18px;
  font-size: 30px;
  font-weight: 400;
}
p {
  text-align: center;
}
.bottomTitle{
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
}
.bottomTitle .left1{
  width: 24%;
}
.bottomTitle .left2{
  width: 24%;
}
.bottomTitle .right1{
  width: 24%;
}
.bottomTitle .right2{
  width: 24%;
}

</style>
