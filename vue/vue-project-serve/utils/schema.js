var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var student_schema = new Schema({
    mobile: Number,
    password: String,
    dbpwd: String,
    sno: Number, // 学生编号 序号 

    pic: String, // 头像
})

exports.Student = mongoose.model("student", student_schema);

var weiji_schema = new Schema({
    id: Number,
    sno: Number,
    sname: String,
    tno: Number,
    tname: String,
    reason: Object,
    time: Date,
    md: String,
    shen: Object,
    shentext: String,
    step: Number,
})

exports.Weiji = mongoose.model("weiji", weiji_schema);

var shensu_schema = new Schema({
    id: Number,
    stuno: Number,
    stuname: String,
    teano: Number,
    teaname: String,
    shen: Object,
    liyou: Object,
    title: String,
    content: String
})

exports.Shensu = mongoose.model("shensu", shensu_schema);



var uid_schema = new Schema({
    name: String,
    id: Number
})

exports.Uid = mongoose.model("uid", uid_schema)


var teacher_schema = new Schema({
    mobile: Number,
    username: String,
    password: String,
    dbpwd: String,
    sno: Number,
    current_bj: String,
    flag: Boolean,
    pic: String, // 头像
})

exports.Teacher = mongoose.model("teacher", teacher_schema);








var movie_schema = new Schema({
    rating: Object,
    genres: Array,
    title: String,
    year: String,
    images: Object,
    id: String
});

exports.Movie = mongoose.model("movie", movie_schema);

var user_schema = new Schema({
    username: String,
    password: String,
    dbpwd: String,
    nickname: String,
    mobile: Number,
    pic:String,
    sex:String,
    msg:String
});

exports.User = mongoose.model("user", user_schema);