<template>
  <div class="login">
    <p class="headBox">登录bilibili</p>
    <mt-field class="username" label="用户名" placeholder="请输入用户名" v-model="form.username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
    <div class="forget">
      <p>
        <a href>忘记密码</a>
      </p>
    </div>
    <div class="btn-box">
      <van-button
        @click="gotoRes"
        class="zc"
        size="normal"
        color="#fb7299"
        plain
        hairline
        type="primary"
      >注册</van-button>
      <van-button @click="goLogin" class="dl" color="#fb7299">登录</van-button>
    </div>
    <p class="zy">
      登录即代表你同意
      <a
        target="_blank"
        href="https://www.bilibili.com/blackboard/account-useragreement.html"
      >用户协议</a>和
      <a target="_blank" href="https://www.bilibili.com/blackboard/privacy-h5.html">隐私政策</a>
    </p>
    <div class="sns-box">
      <div class="sns-title clearfix">
        <div class="line-box">
          <span></span>
        </div>
        <div class="sns-content">
          <p class="tips">其它登录方式</p>
        </div>
        <div class="line-box">
          <span></span>
        </div>
      </div>
      <div class="sns-btn">
        <div>
          <div class="icon-qq"></div>
          <span class="tips">QQ</span>
        </div>
        <div>
          <div class="icon-weibo"></div>
          <span class="tips">微博</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {},
      username:""
    };
  },
  methods: {
    gotoRes() {
      this.$router.push({ name: "register" });
    },
    goLogin(){
      // console.log(22)
      // console.log(this.form);
      // console.log(22)
      this.$axios.post("/vue/login",this.form).then(res=>{
        console.log(11111111111);
        console.log(res);
        console.log(11111111111)
        if(!!res.data.flag){
          this.$router.push({name:"mine"});
          //数据缓存 sessionStorage
          sessionStorage.token=res.data.token;
          sessionStorage.username=res.data.result.username;
        }
      })
    }
  },
  created(){
    if (this.$route.query) {
      this.form.username = this.$route.query.username;
    }
  }
};
</script>

<style scoped>
html,
body,
#app,
.login {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
}
.headBox {
  font-size: 0.426667rem;
  text-align: center;
  line-height: 0.533333rem;
  padding: 0.32rem 0;
  overflow: hidden;
  background-color: #fff;
}
.username {
  margin-top: 0.426667rem;
}
.forget {
  padding: 0.213333rem 0.32rem;
}
.forget p {
  text-align: right;
  line-height: 0.426667rem;
  font-family: PingFangSC-Regular;
  font-size: 0.3rem;
}
.forget p a {
  color: #fb7299;
}
.btn-box {
  width: 7.5rem;
  box-sizing: border-box;
  margin: 0.826667rem auto 0;
  padding: 0 0.32rem;
}
.zc {
  width: 3.2rem;
  margin-right: 0.266667rem;
  height: 0.9rem;
}
.dl {
  width: 3.2rem;
  height: 0.9rem;
}
.zy {
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.426667rem;
  margin: 0.64rem auto 0;
}
.zy a {
  color: #fb7299;
}
.sns-box {
  margin-top: 4.066667rem;
}
.sns-title {
  height: 0.533333rem;
  width: 7.333333rem;
  margin: 0 auto;
}
.line-box {
  float: left;
}
.line-box span {
  margin-top: 0.266667rem;
  width: 2rem;
  display: block;
  height: 0.026667rem;
  background: #e7e7e7;
}
.sns-title .sns-content {
  float: left;
}
.sns-title .sns-content p {
  padding: 0.08rem 0;
  width: 3.333333rem;
  font-family: PingFangSC-Regular;
  font-size: 0.3rem;
  line-height: 0.373333rem;
  text-align: center;
}
.sns-btn {
  font-family: PingFangSC-Regular;
  font-size: 0.266667rem;
  letter-spacing: 0;
  text-align: center;
  margin-top: 0.533333rem;
}
.sns-btn > div {
  display: inline-table;
  margin-right: 0.33333rem;
  margin-left: 0.2rem;
}
.icon-qq {
  background: url(../assets/qq.png) no-repeat center;
  width: 0.44rem;
  height: 0.44rem;
  display: block;
  margin-bottom: 0.106667rem;
  background-size: 100% 100%;
}
.icon-weibo {
  background: url(../assets/wb.png) no-repeat center;
  width: 0.44rem;
  height: 0.44rem;
  display: block;
  margin-bottom: 0.106667rem;
  background-size: 100% 100%;
}
</style>