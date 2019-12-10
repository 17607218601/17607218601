<template>
  <div class="main">
    <van-sticky>
      <Head></Head>
      <div class="nav">
        <router-link to="home">首页</router-link>
        <router-link to="animation">动画</router-link>
        <router-link to="fandrama">番剧</router-link>
        <router-link to="china">国创</router-link>
        <router-link to="music">音乐</router-link>
      </div>
    </van-sticky>

    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var a = document.querySelectorAll(".nav a");
    // console.log(a[0]);
    for (let i = 0; i < a.length; i++) {
      var b = a[i];
      // console.log(b)
      b.onclick = function() {
        console.log(a[i], i);
        a[i].className = "action";
      };
    }
  }
};
</script>


<style scoped lang="scss">
html,
body,
#app,
.main {
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
.nav {
  a {
    flex: 1;
    font-size: 0.3rem;
    color: #888;
    text-align: center;
    line-height: 0.6rem;
    // .router-link-exact-active,
    // .router-link-active {
    //   color: red;
    // }
  }
}
.nav {
  .action {
    color:#fb7299;
  }
}
</style>