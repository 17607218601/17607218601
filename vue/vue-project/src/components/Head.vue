<template>
  <div class="head">
    <a class="logo" @click="gotohome">
    </a>
    <div class="search" @click="gotosearch">
      <van-search id="s-btn" placeholder="请输入搜索关键词" v-model="value" />
    </div>
    <div class="touxiang" @click="gotoM">
      <UploadImg ></UploadImg>
    </div>
    <div class="dl">
      <p>下载APP</p>
    </div>
  </div>
</template>







<script>
import UploadImg from "@/components/uploadImg.vue";
export default {
  components:{
    UploadImg
  },
  data() {
    return {};
  },
  props: {
    value: ""
  },
  methods:{
    gotoM(){
      this.$router.push({name:"mine"})
    },
    gotohome(){
      this.$router.push({name:"home"})
    },
    gotosearch(){
      this.$router.push({name:"search"})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped lang="scss">
.head {
  display: flex;
  // flex-direction: row;
  // position: fixed;
  // z-index: 19;
  // top: 0;
  width: 100%;
  height: 1.32267rem;
  align-items: center;
  padding: 0.2rem 0;
  background-color: #fff;
  justify-content: space-between;
  box-sizing: border-box;
}
.logo {
  display: block;
  margin-left: 0.468rem;
  width: 2rem;
  height: 1.024rem;
  background: url(../assets/logo.png) no-repeat center;
  background-size: 100%;
}

.search {
  margin-left: auto;
  width: 3.5rem;
  height: 1.024rem;
  background: #f4f4f4;
}
.touxiang {
  width: 36px;
  height: 30px;
  margin-right: 0.212rem;
  position: relative;
}
// .tx {
//   border-radius: 50%;
//   display: block;
//   width: 0.6rem;
//   height: 0.6rem;
// }
.dl {
  margin-right: 0.12rem;
  width: 2rem;
  height: 0.6rem;
  border: 0.02133rem solid #fb7299;
  border-radius: 0.17067rem;
  background-color: #fb7299;
}
.dl p {
  font-size: 0.25467rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
}

#s-btn {
  background: #666;
}
</style>

