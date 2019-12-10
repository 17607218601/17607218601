<template>
  <div class="info" id="aaa">
    <Head></Head>

    <div class="tx">
      <div class="ms">
        <p>头像</p>
      </div>
      <div class="tp" @click="posttouxiang">
        <!-- <img :src="pic" alt /> -->
        <UploadImg :a="pic"></UploadImg>
      </div>
      <input type="file" @change="todoupload" ref="upload" class="fileclass" />
    </div>
    <van-cell title="账号" is-link :value="b" @click="zh" />
    <van-cell title="昵称" is-link :value="c" @click="nc"/>
    <!-- <van-field
      is-link
      readonly
      clickable
      label="性别"
      :value="value"
      placeholder="保密"
      @click="showPicker = true"
    />-->
    <van-cell title="性别" is-link :value="value" @click="showPicker = true" />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-cell title="个性签名" @click="m" is-link :value="a" />
    <van-cell title="修改密码" is-link value @click="gotoUpdate" />
    <van-button type="default" class="btn" @click="del">退出登录</van-button>
    <Foot></Foot>
  </div>
</template>

<script>
import pic from "@/assets/sw2.jpg";
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      showPicker: false,
      columns: ["男", "女", "保密"],
      userInfo: {},
      pic: "",
      b: "",
      c: "",
      xb: "",
      a: "( '_ > `) 介绍一下自己吧"
    };
  },
  methods: {
    zh() {
      Toast("账号终生绑定，不能修改");
    },
    nc(){
      this.$router.push({name:"nickname"})
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
      this.$axios
        .post("/vue/changesex", { params: { xb: this.value } })
        .then(res => {
          console.log(11);
          console.log(res);
          console.log(22);
        });
      // window.location.reload();
    },
    del() {
      sessionStorage.token = "";
      sessionStorage.username = "";
      console.log(111);
      console.log(sessionStorage);
      this.$router.push({ name: "mine" });
    },
    m() {
      this.$router.push({ name: "signature" });
    },
    gotoUpdate() {
      this.$router.push({ name: "updatepwd" });
    },
    posttouxiang() {
      this.$refs.upload.click();
    },
    todoupload() {
      console.log("开始上传。。。");
      var file = this.$refs.upload.files[0]; //需要上传的文件
      console.log(file);
      var data = new FormData(); //转换为表单的形式提交到后台
      data.append("avatar", file);

      this.$axios({
        url: "/vue/uploadpic",
        method: "POST",
        params: {},
        data
      }).then(res => {
        console.log(res);
        this.pic = res.data.pic.replace("public", "http://47.98.138.152:5652");
        //this.pic=res.data.pic.replace("public","/");//反向代理
        localStorage.avatar = this.pic;
      });
    }
  },
  mounted() {
    this.$axios.get("/vue/getinfo").then(res => {
      console.log(5);
      console.log(res);
      console.log(5);
      this.userInfo = res.data.result;
      console.log(this.userInfo);
      this.b = this.userInfo.username ? this.userInfo.username : "";
      this.c = this.userInfo.nickname ? this.userInfo.nickname : "";
      this.a = this.userInfo.msg
        ? this.userInfo.msg
        : "( '_ > `) 介绍一下自己吧";
    });
    // if (localStorage.avatar) {
    //   this.pic = localStorage.avatar;
    // } else {
    //没有去数据库查询
    // this.$axios.post("/vue/getavatar").then(res => {
    //   if (!!res.data.flag) {
    //     this.pic = res.data.result.pic.replace(
    //       "public",
    //       "http://localhost:5652"
    //     );
    //   } else {
    //     this.pic = pic;
    //   }
    // });
    this.$axios.post("/vue/getsex").then(res => {
      console.log(res);
      this.value = res.data.result.sex ? res.data.result.sex : "保密";
    });
  },
  mounted() {
    this.$axios.post("/vue/getavatar").then(res => {
      if (!!res.data.flag) {
        this.pic = res.data.result.pic.replace(
          "public",
          "http://47.98.138.152:5652"
        );
      } else {
        this.pic = pic;
      }
    });
  }
};
</script>

<style scoped lang="scss">
html,
body,
#app,
.info {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
}
.a {
  margin-top: 20px;
}
.btn {
  width: 100%;
  margin-top: 50px;
  height: 50px;
}
.van-cell__value .van-field__body .van-field__control {
  text-align: right;
}
.tx {
  margin-top: 15px;
  width: 100%;
  height: 68px;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
}
.ms {
  width: 30px;
  height: 25px;
  margin-top: 15px;
  margin-left: 5px;
  float: left;
}
.ms p {
  font-size: 14px;
  text-align: center;
  line-height: 25px;
}
.tp {
  float: right;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
.tp img {
  position: absolute;
  height: 100%;
  width: 100%;
}
.fileclass {
  display: none;
}
</style>