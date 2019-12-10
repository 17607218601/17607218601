<template>
  <div class="signature">
    <div class="headBox">
      <div class="box" @click="fh">
        <van-icon name="arrow-left" />
      </div>
      <p class="ge">个性签名</p>
      <p class="set" @click="bc">保存</p>
    </div>
    <div>
      <van-cell-group>
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="签名"
          type="textarea"
          maxlength="50"
          placeholder="请输入个性签名"
          show-word-limit
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    fh() {
      this.$router.go(-1);
    },
    bc() {
      this.$axios
        .post("/vue/setmsg", { params: { msg: this.message } })
        .then(res => {
          console.log(this.message)
          console.log(1)
          console.log(res)
          console.log(1)
          this.message=this.message
        });
    }
  }
};
</script>


<style lang="scss" scoped>
html,
body,
#app,
.signature {
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
</style>