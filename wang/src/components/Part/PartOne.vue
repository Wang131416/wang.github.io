<template>
  <div class="part-one">
    <img class="part-one-image" src='../../assets/head_image.png' alt="头像">
    <p>姓&emsp;&emsp;名：汪丰</p>
    <p>学&emsp;&emsp;历：专科</p>
    <p>工作年限：2 年</p>
    <p>年&emsp;&emsp;龄：23</p>
    <p>联系电话：18615649060</p>
    <p>电子邮箱：18615649060@163.com</p>
  </div>
</template>

<script>
export default {
  name: "partOne",
  data() {
    return {
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
p {
  line-height: 30px;
}
.part-one {
  width: 100%;
  height: 100%;
  background: #18202d;
}
.part-one-image {
  width: 150px;
  height: 150px;
}
</style>
