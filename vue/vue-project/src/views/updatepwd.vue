<template>
  <div class="pwd">
    <p class="headBox">修改你的密码</p>
    <mt-field class="password" label="旧密码" placeholder="请输入旧密码" v-model="password.oldValue"></mt-field>
    <mt-field label="密码" placeholder="请输入新密码" type="password" v-model="password.newValue"></mt-field>
    <!-- <mt-field label="密码" placeholder="请确认新密码" type="password" v-model="form.password"></mt-field> -->

    <div class="btn-box">
      <van-button
        @click="gotoMine"
        class="zc"
        size="normal"
        color="#fb7299"
        plain
        hairline
        type="primary"
      >取消</van-button>
      <van-button  class="dl" color="#fb7299" :disabled="!disabled" @click="todochange">确定</van-button>
    </div>

    <Foot></Foot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: {},
    
    };
  },
  computed:{
      disabled:{
          get(){
              var flag=false;
              if(this.password.oldValue&&this.password.newValue){
                  flag=true;
              }
              return flag;
          }
      }
  },
  methods:{
      gotoMine(){
          this.$router.push({name:'mine'})
      },
      todochange(){
          this.$axios.post("/vue/changepwd",{
              oldValue:this.password.oldValue,
              newValue:this.password.newValue,
              username:sessionStorage.username
          }).then(res=>{
              if(!!res.data.flag){
                  this.$router.push({
                      name:'login'
                  })
              }
          })
      }
  }
};
</script>


<style scoped>
html,
body,
#app,
.pwd {
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
  margin-bottom: 30px;
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
</style>