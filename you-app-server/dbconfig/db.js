//数据库连接
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/you_db';

mongoose.connect(DB_URL, { useNewUrlParser: true });
// var db = mongoose.connection;

mongoose.connection.on('connected', function() {
    console.log('数据库已打开' + DB_URL);
})

mongoose.connection.on('error', function(err) {
    console.log('数据库错误：' + err);
})

mongoose.connection.on('disconnecyed', function() {
    console.log('数据库断开连接');
})

module.exports = mongoose;