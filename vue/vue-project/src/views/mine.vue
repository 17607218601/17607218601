<template>
  <div class="mine">
    <Head></Head>
    <div class="banner">
      <img src="@/assets/bannerTop.png" alt />
      <div class="lr" v-if="!userInfo.nickname">
        <van-button class="login" type="primary" to="register" plain color="#fb7299">注册</van-button>
        <van-button class="res" type="primary" to="login" color="#fb7299">登录</van-button>
      </div>
      <div class="wd" v-else>
        <MineNew :nickname="userInfo.nickname"></MineNew>
      </div>
    </div>
    <div class="tool" v-if="userInfo.nickname"></div>
    <div class="tg">
      <van-tabs v-model="active">
        <van-tab title="历史记录">内容 1</van-tab>
        <van-tab title="我的投稿">
          <div class="wdtg">
            <div class="noinfo">
              <img class="bg" src="@/assets/noContent.png" alt />
              <p class="p1">你还没有投过稿</p>
              <p class="p2">
                快去发现
                <a href>新内容</a>吧
              </p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
//  v-if="!userInfo.nickname"
//   <div class="wd" v-else>
// <div v-if="userInfo.nickname" class="tool"></div>
//  v-if="userInfo.username"
export default {
  data() {
    return {
      active: "",
      userInfo: {
        nickname: ""
      }
    };
  },
  mounted() {
    this.$axios.get("/vue/getinfo").then(res => {
      console.log(33);
      console.log(res);
      console.log(33);
      this.userInfo = res.data.result;
    });
  }
};
</script>


<style scoped>
.banner {
  width: 100%;
  height: 2.65rem;
  position: relative;
}
.banner img {
  width: 100%;
}
.lr {
  position: absolute;
  top: 1.3rem;
  left: 1.8rem;
  width: 3.9rem;
  height: 0.72rem;
}
.login {
  height: 0.6rem;
  width: 1.6rem;
  margin-right: 0.7rem;
  line-height: 0.6rem;
}
.res {
  height: 0.6rem;
  width: 1.6rem;
  line-height: 0.6rem;
}
.tg {
  width: 100%;
  /* margin-top: 130px; */
  background-color: #fff;
  border-top: 0.02133rem solid #979797;
  /* border-bottom: 0.02133rem solid #979797; */
}
.wd {
  position: absolute;
  left: 0;
  top: 2.65rem;
  width: 100%;
}
.tool {
  height: 130px;
  width: 100%;
}
.wdtg {
  width: 375px;
  height: 316px;
}
.noinfo {
  width: 100%;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 10px;
}
.bg {
  width: 285px;
  height: 160px;
  margin: 0 auto;
}
.p1 {
  text-align: center;
  line-height: 20px;
  height: 20px;
  color: #979797;
  font-size: 16px;
}
.p2 {
  text-align: center;
  line-height: 20px;
  height: 20px;
  color: #979797;
  font-size: 16px;
}
.p2 a{
  color: #fb7299;
}
</style>