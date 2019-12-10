//路由

var express = require("express");
var router = express.Router();

const {
    User
} = require("./utils/schema")
const {
    aesEncrypt,
    keys
} = require("./utils");
// const axios = require('axios');


router.get("/index", (req, res) => {
    res.json({
        msg: "这是vue项目的后台接口文件",
        body: null,
        code: 200
    })
})

//注册
router.post("/register", (req, res) => {
    var body = req.body;
    console.log(body);
    insertData(User);

    function insertData(coll) {
        coll.findOne({
            username: body.username,
        }).then(result => {
            if (result) {
                res.json({
                    msg: "账号已经被注册，请重新注册",
                    code: 200,
                    flag: 0,
                    result: "注册失败"
                })
            } else { //插入逻辑
                coll.insertMany(body).then(result => {
                    res.json({
                        msg: "注册成功",
                        code: 200,
                        flag: 1,
                        result: "注册成功"
                    })
                })
            }
        })
    }
})

//登录

router.post("/login", (req, res) => {
    var body = req.body;
    console.log(body);
    findData(User);

    function findData(coll) {
        coll.findOne({
            username: body.username
        }).then(result => {
            if (result) {
                if (result.password == body.password) {

                    req.session.username = result.username;
                    req.session.password = result.password;
                    req.session.nickname = result.nickname;
                    req.session.flag = result.flag;
                    req.session.token = aesEncrypt(body.username + new Date().getTime(), keys);
                    res.json({
                        msg: "登录成功",
                        code: 200,
                        flag: 1,
                        result,
                        token: req.session.token
                    });

                } else {
                    res.json({
                        msg: "账号或密码错误，请重新登录",
                        code: 200,
                        flag: 0
                    })
                }

            } else {
                res.json({
                    msg: "账号不存在，请重新登录",
                    code: 200,
                    flag: 0
                })
            }
        })
    }
})

//我的
//根据账号获取所有信息
router.get("/getinfo", (req, res) => {
    User.findOne({
        username: req.session.username
    }).then(result => {
        res.json({
            // msg: "获取用户信息成功",
            result,
            code: 200,
        })
    })
})

//更改密码
router.post("/changepwd", (req, res) => {
    var body = req.body;
    console.log(body);
    User.findOne({
        username: body.username
    }).then(result => {
        if (result) {
            if (result.password == body.oldValue) {
                User.updateOne({
                    username: body.username
                }, {
                    $set: {
                        password: body.newValue
                    }
                }).then(result => {
                    res.json({
                        code: 200,
                        msg: "修改成功",
                        flag: 1,
                        result
                    })
                })
            } else {
                res.json({
                    code: 200,
                    msg: "原始密码错误",
                    flag: 0
                })
            }
        } else {
            res.json({
                code: 200,
                msg: "数据未查询到",
                flag: 0
            })


        }
    })
})

//上传头像
var multer = require("multer");
var storage = multer.diskStorage({ //操作硬盘
    destination: function (req, file, cb) {
        cb(null, './public/avatar')
    },
    filename: function (req, file, cb) { // 时间戳    
        cb(null, Date.now() + 'wh1909' + file.originalname); //1115663254wh19092.jpg
    }
})
//创建上传对象
var upload = multer({
    storage: storage
}).any();

router.post("/uploadpic", upload, (req, res) => {
    console.log(5652);
    console.log(req.files);
    var path = req.files[0].path;
    update(User);

    function update(coll) {
        coll.updateOne({
            username: req.session.username
        }, {
            $set: {
                pic: path
            }
        }).then(result => {
            res.json({
                // msg: "头像上传成功",
                pic: path,
                result
            })
        })
    }
})

//获取头像
router.post("/getavatar", (req, res) => {
    var body = req.body;
    findSome(User);

    function findSome(coll) {
        coll.findOne({
            username: req.session.username
        }).then(result => {
            if (result) {
                res.json({
                    code: 200,
                    // msg: "获取头像成功",
                    result,
                    flag: 1
                })
            } else {
                res.json({
                    code: 200,
                    msg: "获取头像失败",
                    flag: 0
                })
            }
        })
    }
})

//更改性别
router.post("/changesex", (req, res) => {
    var body = req.body;
    console.log(323);
    console.log(req.body);
    console.log(2323);
    console.log(body.params.xb);
    findSex(User);

    function findSex(coll) {
        coll.findOne({
            username: req.session.username
        }).then(result => {
            console.log(2323)
            console.log(result);
            console.log(result.sex);
            console.log(body.params.xb)
            console.log(result.username)
            User.updateOne({
                username: result.username
            }, {
                $set: {
                    sex: body.params.xb
                }
            }).then(c => {
                res.json({
                    code: 200,
                    msg: "修改成功",
                    result
                })
            })
        })
    }
})

//查询性别
router.post("/getsex", (req, res) => {
    var body = req.body;
    User.findOne({
        username: req.session.username
    }).then(result => {
        res.json({
            // msg: "获取用户信息成功",
            result,
            code: 200,
        })
    })
})

//设置签名
router.post("/setmsg", (req, res) => {
    var body = req.body;
    console.log(body);
    console.log(body.params.msg)
    console.log(req.session.username)
    User.findOne({
        username: req.session.username
    }).then(result => {
        console.log(result)
        User.updateOne({
            username: req.session.username
        }, {
            $set: {
                msg: body.params.msg
            }
        }).then(a => {
            console.log(a)
            res.json({
                msg: "设置成功",
                code: 200,
                result
            })
        })
    })
})


//设置昵称
router.post("/setnickname", (req, res) => {
    var body = req.body;
    console.log(body);
    console.log(body.params.nickname)
    console.log(req.session.username)
    User.findOne({
        username: req.session.username
    }).then(result => {
        User.updateOne({
            username: req.session.username
        }, {
            $set: {
                nickname: body.params.nickname
            }
        }).then(a => {
            res.json({
                msg: "更改成功",
                code: 200,
                result
            })
        })
    })
})
module.exports = router;