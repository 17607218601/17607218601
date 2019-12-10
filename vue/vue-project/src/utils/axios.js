import axios from "axios";


var token = "";
//axios.defaults.baseURL = "http://localhost:5652/"; //应用基路径
axios.defaults.headers.common['token'] = token; // token 为 空
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import {
    Dialog
} from "vant";

export function Toast(msg) {
    Dialog.alert({
        message: msg
    }).then(() => {
        close;
    });
}

// axios 拦截器   Interceptors

// 请求 request 拦截器   请求之前业务逻辑 配置 data /headers
axios.interceptors.request.use(function (config) {
    // 请求发送之前做的事情
    console.log(config);
    token = sessionStorage.token ? sessionStorage.token : "";
    config.headers['token'] = token;

    return config;
}, function (error) {
    console.log("请求失败")
    Toast("请求失败-request", "error");
    // 请求发送 失败 
    return Promise.reject(error);

});

// 响应 response 拦截器   根据返回的状态码 做对应的业务逻辑 
axios.interceptors.response.use(function (response) {
    // 获取到响应数据做的事情
    // console.log(response);


    // setTimeout(() => {
    Toast(response.data.msg);
    // if (response.data.code == "10000") {
    //     router.push({
    //         name: 'login'
    //     });
    // }
    // }, 100)

    return response;
}, function (error) {
    console.log("响应失败")
    // 无法响应 
    Toast("响应失败-response", "error");
    return Promise.reject(error);
});



export const http = axios; //解构暴露