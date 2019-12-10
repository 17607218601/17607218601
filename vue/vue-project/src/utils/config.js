import Vue from "vue"
// 全局注册组件  

//引入mockjs文件
import "./mock";



import Head from "@/components/Head.vue"
import Foot from "@/components/Foot.vue"
import MineNew from "@/components/mine-new.vue"
import UploadImg from "@/components/uploadImg.vue"
Vue.component("Head", Head);
Vue.component("Foot", Foot);
Vue.component("MineNew",MineNew);
Vue.component("UploadImg",UploadImg);