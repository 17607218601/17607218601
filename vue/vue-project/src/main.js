import Vue from 'vue'
import App from './App.vue' //根组件
import router from './router' //路由模块
import store from './store' //vuex 模块

//全局注册  组件 过滤器 指令
import "@/utils/config";

//全局样式
import "@/styles/index.scss";

//使用mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//引入vant 
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


//使用vue-resource
import VueResource from "vue-resource";
Vue.use(VueResource); //this.$http.get  Vue.http


//使用axios
import {
  http
} from "@/utils/axios";
Vue.prototype.$axios = http; //this.$axios=axios


console.log("vue 项目的主入口文件 ");


Vue.config.productionTip = false

new Vue({
  router, // 挂载到根实例   this.$router
  store,
  render: h => h(App) // 渲染组件
}).$mount('#app')

//  h => h(App)  箭头函数 
// function render(h){
//   return h(App)
// }