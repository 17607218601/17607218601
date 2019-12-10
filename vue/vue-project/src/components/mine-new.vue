<template>
  <div class="news">
    <div class="tx">
      <UploadImg></UploadImg>
    </div>
    <div class="info" @click="gotoinfo">
      <p>账号资料</p>
    </div>
    <div class="n">
      <div class="nickname">
        <p>{{nickname}}</p>
      </div>
    </div>
    <div class="num">
      <p>44关注</p>
      <p>13粉丝</p>
    </div>
  </div>
</template>


<script>
export default {
  props: ["nickname"],
  data() {
    return {};
  },
  methods: {
    gotoinfo() {
      if (sessionStorage.token) {
        this.$router.push({ name: "info" });
      }else{
        this.$router.push({ name: "login" });
      }
    }
  }
};
</script>


<style scoped>
.news {
  height: 130px;
  width: 100%;
  background-color: #fff;
  /* padding-bottom: 0.768rem; */
  position: relative;
  /* box-sizing: border-box; */
}
.tx {
  width: 80px;
  height: 80px;
  position: absolute;
  top: -40px;
  left: 10px;
  z-index: 1;
}
.info {
  position: absolute;
  z-index: 2;
  width: 73px;
  height: 30px;
  border: 0.02133rem solid #fb7299;
  right: 0.3rem;
  top: 0.2rem;
  border-radius: 0.17067rem;
}
.info p {
  font-size: 14px;
  line-height: 30px;
  color: #fb7299;
  text-align: center;
}
.n {
  width: 100%;
  height: 90px;
  /* padding-top: 60px; */
  margin-left: 12px;
  overflow: hidden;
}
.nickname {
  width: 140px;
  height: 24px;
  margin-top: 50px;
}
.nickname p {
  font-size: 22px;
  color: #212121;
  line-height: 24px;
}
.num {
  width: 100%;
  height: 20px;
  margin-top: 5px;
}
.num p {
  float: left;
  margin-left: 10px;
  font-size: 16px;
  line-height: 16px;
}
</style>