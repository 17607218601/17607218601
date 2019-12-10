<template>
  <div class="home">
    <h2>zhuye</h2>
    <!-- <Head></Head> -->
    <!-- <div class="nav">
      <router-link to="home">首页</router-link>
      <router-link to="animation">动画</router-link>
      <router-link to="fandrama">番剧</router-link>
      <router-link to="china">国创</router-link>
      <router-link to="music">音乐</router-link>
    </div> -->
    <!-- <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/tx.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/sw1.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/sw2.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/sw3.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <div class="content2">asdas</div>
    </div>
    <Foot></Foot>
    <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "../assets/tx.jpg",
        "../assets/sw1.png",
        "../assets/sw2.jpg",
        "../assets/sw3.jpg"
      ]
    };
  }
};
</script>

<style scoped>
html,
body,
#app,
.home {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
}
.nav {
  background-color: #fff;
  width: 100%;
  height: 0.6rem;
  overflow: hidden;
  display: flex;
}
.nav a {
  flex: 1;
  font-size: 0.3rem;
  color: #888;
  text-align: center;
  line-height: 0.6rem;
}

.router-link-exact-active, .router-link-active{
  color:red;
}
.van-swipe {
  margin-top: 0.2rem;
  height: 2.69333rem;
  border-radius: 0.34133rem;
  /* padding: 0 0.512rem; */
  margin: auto;
}
.van-swipe img {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  padding-top: 0.25rem;
}
.content2 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
</style>