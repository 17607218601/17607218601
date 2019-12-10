<template>
  <div class="nickname">
    <div class="headBox">
      <div class="box" @click="fh">
        <van-icon name="arrow-left" />
      </div>
      <p class="ge">昵称</p>
      <p class="set" @click="bc">保存</p>
    </div>
    <van-field
      v-model="nickname"
      required
      clearable
      label="昵称"
      right-icon="question-o"
      @click-right-icon="$toast('不要轻易修改你的昵称')"
    />
    <div class="ts">
      <p class="z">每次修改昵称需要六个硬币</p>
      <p class="y" @click="ewm">如何获取硬币?</p>
    </div>
    <div class="pic">
      <img src="@/assets/ewm.jpg" alt @click="xs" />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      nickname:""
    };
  },
  methods: {
    fh() {
      this.$router.go(-1);
    },
    bc() {
      this.$axios
        .post("/vue/setnickname", { params: { nickname: this.nickname } })
        .then(res => {
          
          console.log(1);
          console.log(res);
          console.log(1);
          this.nickname = this.nickname;
        });
    },
    ewm() {
      document.querySelector(".pic").style.display = "block";
    },
    xs() {
      document.querySelector(".pic").style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
html,
body,
#app,
.nickname {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
}
.headBox {
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.533333rem;
  padding: 0.32rem 0;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 30px;
  display: flex;
  .van-icon {
    float: left;
    color: #fb7299;
    margin-left: 10px;
  }
  .ge {
    float: left;
    flex: 1;
    color: #fb7299;
  }
  .set {
    float: left;
    font-size: 16px;
    color: #fb7299;
    margin-right: 12px;
  }
  .box {
    width: 40px;
    height: 25px;
    margin-left: 10px;
  }
}
.ts {
  width: 100%;
  height: 20px;
  margin-top: 5px;
  padding: 0 5px;
  box-sizing: border-box;
  .z {
    float: left;
    color: #666;
    font-size: 12px;
  }
  .y {
    float: right;
    color: royalblue;
    font-size: 12px;
  }
}
.pic {
  width: 80%;
  height: 300px;
  position: absolute;
  top: 200px;
  left: 40px;
  display: none;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>