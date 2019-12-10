<template>
  <div class="search">
    <div class="btn">
      <van-search v-model="info.value" placeholder="请输入搜索关键词" show-action @search="onSearch">
        <div slot="action" @click="fh" class="qx">取消</div>
      </van-search>
    </div>
    <div class="tips">
      <p class="bt">大家都在搜</p>
      <div class="ts">
        <div>
          <p>刺客伍六七</p>
        </div>
        <div>
          <p>小丑</p>
        </div>
        <div>
          <p>康辉</p>
        </div>
        <div>
          <p>程序员不配吃10元的快餐</p>
        </div>
        <div>
          <p>我是不可以点击的</p>
        </div>
        <div>
          <p>我是为了装饰的</p>
        </div>
        <div>
          <p>996</p>
        </div>
      </div>
    </div>
    <div class="history">
      <p class="headBox">历史记录</p>
      <div>
          
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      info:{

      }
    };
  },
  methods: {
    fh() {
      this.$router.go(-1);
    },
    onSearch() {}
  }
};
</script>


<style lang="scss" scoped>
html,
body,
#app,
.search {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
}
.tips {
  width: 100%;
  min-height: 100px;
  margin-top: 15px;
  padding: 0 10px;
  background: #fff;
  overflow: hidden;
  box-sizing: border-box;

  .bt {
    font-size: 14px;
    color: #999;
  }
  .ts {
    width: 100%;
    height: 92px;
    margin-top: 10px;
    margin-bottom: 30px;

    div {
      padding: 8px 10px;
      margin-top: 10px;
      border: 1px solid #ccc;
      border-radius: 20px;
      flex: 1;
      margin-right: 6px;
      float: left;
      p {
        font-size: 12px;
      }
    }
  }
}
.qx {
  color: #fb7299;
}
.history {
  margin-top: 20px;
  min-height: 50px;
  width: 100%;
  padding: 0 10px;
  background: #fff;
  box-sizing: border-box;
  .headBox {
    margin-left: 5px;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    color: #999;
  }
}
</style>