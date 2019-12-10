// vue 配置文件 修改必须重启 
module.exports = {
    publicPath: "",//一定要修改
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        open: true, // 自动打开浏览器
        proxy: { //  代理    不能axios 基路径共存 
            "/vue": {
                target: "http://localhost:5652",
                changeOrigin: true,
            },
            "/avatar": {
                target: "http://localhost:5652",
                changeOrigin: true,
            },
        }
    },
    // configureWebpack:{
    //     externals:{
    //         'vue':'Vue',
    //         'vue-router':'VueRouter',
    //         'vuex':'Vuex',
    //         'vant':'vant',
    //         'mint-ui':'mint-ui',
    //         'axios':'axios',
    //     }
    // }
}