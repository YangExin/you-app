const express = require('express');
const { mock, Random } = require('mockjs');
const api = require('./api');
const url = require('url');
// const http = require('http');
const { JSDOM } = require('jsdom');
var app = express();





app.listen('3333', 'localhost', (error) => {
    if (error) {
        console.log('启动失败');
    } else {
        console.log('启动成功')
    }
});