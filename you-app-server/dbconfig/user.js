const mongoose = require('./db');
const Schema = mongoose.Schema;

//创建表格
// mongoose.createConnection('user', {
//     autoIndexId: true
// })
const user = new Schema({
    phone: String,
    password: String
});

const User = mongoose.model('User', user);
// module.exports = User;

module.exports = {
    checkPhone(phone) {
        return User.findOne(phone).then(result => {
            if (result) { //手机号存在
                return Promise.reject();
            }
            return Promise.resolve();
        })
    },
    save(obj) {
        return this.checkPhone({ phone: obj.phone })
            .then(bool => {
                console.log(obj)
                var model = new User(obj);
                return model.save();
            }).catch(bool => {
                return Promise.reject();
            })
    },
    find(obj) {
        return User.findOne(obj).then(result => {
            if (result) {
                let { _doc: { phone, password, _id: id } } = result
                return Promise.resolve({
                    phone,
                    password,
                    id
                });
            }
            return Promise.reject(false);
        })
    }
}