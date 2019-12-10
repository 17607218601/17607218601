<template>
  <div class="img">
    <img class="image" :src="b" />
  </div>
</template>


<script>
import pic from "@/assets/sw2.jpg";
export default {
  data() {
    return {
      b:this.a
    };
  },
  props: { //props只可读不可改
    a: String
  },
  created() {
    this.$axios.post("/vue/getavatar").then(res => {
      if (!!res.data.flag) {
        this.b = res.data.result.pic.replace(
          "public",
          "http://47.98.138.152:5652"
        );
      } else {
        this.b = pic;
      }
    });
  }
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
}
.image {
  border-radius: 50%;
  display: block;
  width: 100%;
  height: 100%;
}
</style>