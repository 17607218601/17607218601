const express = require("express");
const app = express();

//app==express 重置request和response
const server = require("http").createServer(app);

const port = 5652;
const hostname = "0.0.0.0";//如果不是这个切换成公网ip

const connection = require("./utils/connect")
const cors = require("cors");
const path=require("path");


app.use(cors()); //通过cors解决跨域问题
app.use(express.json()); //  得到 post请求的提交的 formData 数据 
app.use(express.urlencoded({
    extended: false
})); // req.body 
app.use(express.static(path.join(__dirname, 'public')));  // 设置express静态文件目录 img/css/js

var session = require("express-session");
app.use(session({
    name: "vue-project-serve",
    saveUninitialized: true,
    secret: "test",
    //cookie: {
       // maxAge: 1000 * 60 * 60
    //}, // session 保存时长  1hour 
    resave: false
}))

var {
    checkToken
} = require("./utils");


app.get("/index", (req, res) => {
    res.send("这是我的5652后台服务器地址")
});

app.get("/demo", (req, res) => {
    res.json({
        msg: "测试接口是否成功",
        code: 200,
        result: "ok"
    })
})

app.use(checkToken);
//配vue路由
const vueRouter = require("./vue"); //导入
app.use("/vue", vueRouter);


server.listen(port, hostname, () => {
    console.log(`my server is running on http://${hostname}:${port}`);
})