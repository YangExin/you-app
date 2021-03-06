const express = require('express');
const { mock, Random } = require('mockjs');
const api = require('./api');
const url = require('url');
const User = require('./dbconfig/user');
const Usercatelist = require('./dbconfig/usercatelist');
const Catelist = require('./dbconfig/usercatelist2')
const Usersubscribe = require('./dbconfig/usersubscribe');
const Subscribe = require('./dbconfig/usersubscribe2');
const Official = require('./dbconfig/official');
const Address = require('./dbconfig/address');
const { JSDOM } = require('jsdom');
// const session = require('express-session');
var app = express();
app.use(express.json());
app.use(express.urlencoded());


app.post(api.CHECKUSERPHONE_URL, (req, res) => {
    // console.log(req.body);
    // var obj = {
    //     phone: '13620221459',
    //     password: '123456'
    // }
    // const user = new User(obj);
    // user.save().then((result, err) => {
    //         res.json({
    //             state: 0,
    //             data: result.id
    //         })
    //     })
    User.checkPhone(req.body)
        .then(result => {
            res.json({
                message: 'ok',
                status: 0,
                data: {
                    msg: '手机号可以使用！'
                }
            })
        })
        .catch(result => {
            res.json({
                message: 'error',
                status: 1,
                data: {
                    msg: '手机号已存在！'
                }
            })
        })
})


app.post(api.REGISTERUSER_URL, (req, res) => {
    User.save(req.body)
        .then(data => {
            res.json({
                message: '注册成功',
                status: 0
                    // data: data.id
            })
        })
        .catch(error => {
            console.log(error);
            res.json({
                message: '注册失败',
                status: 1,
            })
        })
})


app.post(api.CHECKLOGINPHONE_URL, (req, res) => {
    User.find(req.body)
        .then(data => {
            res.json({
                message: '登陆成功',
                status: 0,
                data: data
            })
        })
        .catch(error => {
            res.json({
                message: '登陆失败',
                status: 1
            })
        })
})

app.post(api.USERCATELIST_URL, (req, res) => {
    // console.log(req.body);
    Usercatelist.find(req.body)
        .then(data => {
            // console.log(data);
            res.json({
                status: 0,
                message: 'ok',
                data
            });
        })
})

app.post(api.USERCATELIST2_URL, (req, res) => {
    // console.log(req.body);
    Catelist.find(req.body)
        .then(data => {
            // console.log(data);
            res.json({
                status: 0,
                message: 'ok',
                data
            });
        })
})


app.post(api.USERSUBSCRIBR_URL, (req, res) => {
    // console.log(req.body);
    Usersubscribe.find(req.body)
        .then(data => {
            res.json({
                status: 0,
                message: 'ok',
                data
            })
        })
})

app.post(api.USERSUBSCRIBR_URL2, (req, res) => {
    // console.log(req.body);
    Subscribe.find(req.body)
        .then(data => {
            res.json({
                status: 0,
                message: 'ok',
                data
            })
        })
})


app.get(api.OFFICIAL_URL,(req,res)=>{
    Official.find({})
    .then(data=>{
        res.json({
            status:0,
            message:'ok',
            data
        })
    })
})

app.post(api.USERADDRESS_URL,(req,res)=>{
    // console.log(req.body)
    Address.find(req.body)
    .then(data=>{
        // console.log(data);
        
        res.json({
            status:0,
            message:'ok',
            data:data.result
        })
    })
})

app.listen('3333', 'localhost', (error) => {
    if (error) {
        console.log('启动失败');
    } else {
        console.log('启动成功')
    }
});