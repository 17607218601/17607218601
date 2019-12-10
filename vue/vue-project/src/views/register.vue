<template>
  <div class="login">
    <p class="headBox">注册bilibili</p>
    <mt-field class="username" label="账号" placeholder="请输入用户名或手机号" v-model="form.username"></mt-field>
    <mt-field class="nickname" label="昵称" placeholder="请输入用昵称" v-model="form.nickname"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="form.password"></mt-field>
    <mt-field label="确认密码" placeholder="请确认密码" type="password" v-model="form.dbpwd"></mt-field>

    <div class="btn-box">
      <van-button
        @click="gotoLogin"
        class="zc"
        size="normal"
        color="#fb7299"
        plain
        hairline
        type="primary"
      >登录</van-button>
      <van-button @click="gotoRes" class="dl" color="#fb7299">同意并注册</van-button>
    </div>
    <p class="zy">
      完成注册即代表你同意
      <a
        target="_blank"
        href="https://www.bilibili.com/blackboard/account-useragreement.html"
      >用户协议</a>和
      <a target="_blank" href="https://www.bilibili.com/blackboard/privacy-h5.html">隐私政策</a>
    </p>
  </div>
</template>


<script>
import router from "@/router";
import { Dialog } from "vant";
export default {
  data() {
    return {
      nickname: "",
      username: "",
      password: "",
      dbpwd: "",
      form: {}
    };
  },
  methods: {
    gotoLogin() {
      router.push({ name: "login" });
    },
    gotoRes() {
      console.log(this.form);

      this.$http
        .post("http://47.98.138.152:5652/vue/register", this.form)
        .then(res => {
          console.log(res);

          if (!!res.data.flag) {
            this.$router.push({ name: "login",query:{username:this.form.username}});//把数据带到登录  登陆要接受
          } else {
            Dialog.alert({
              message: res.data.msg
            }).then(() => {
              close;
            });
          }
        });
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
</style>