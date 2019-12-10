import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Main from "@/views/main.vue"
import Register from "@/views/register.vue"
import Login from "@/views/login.vue"
import Home from "@/views/home.vue"


const routes = [{
    path: '/',
    redirect: {
      name: 'home',
    }
  },

  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [{

        path: 'home',
        name: 'home',
        component: Home,

      },
      {
        path: 'animation',
        name: 'animation',
        component:()=>import("@/views/animation.vue"),  //Vue  路由 懒加载 
      },
      {
        path: 'fandrama',
        name: 'fandrama',
        component:()=>import("@/views/fandrama.vue"), 
      },
      {
        path: 'china',
        name: 'china',
        component:()=>import("@/views/china.vue"),
      },
      {
        path: 'music',
        name: 'music',
        component: ()=>import("@/views/music.vue"),
      }
    ]
  },

  {
    path: '/search',
    name: 'search',
    component: ()=>import("@/views/search.vue"),
  },
  {
    path: '/info',
    name: 'info',
    component: ()=>import("@/views/info.vue"),
  },
  {
    path: '/signature',
    name: 'signature',
    component:()=>import("@/views/signature.vue"),
  },
  {
    path: '/nickname',
    name: 'nickname',
    component:()=>import("@/views/nickname.vue"),
  },
  {
    path: '/updatepwd',
    name: 'updatepwd',
    component:()=>import("@/views/updatepwd.vue"),
  },
  {
    path: '/mine',
    name: 'mine',
    component: ()=>import("@/views/mine.vue"),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: "*",
    redirect: {
      name: "home"
    }
  }
]

const router = new VueRouter({
  routes,
  mode: "hash"
})

export default router