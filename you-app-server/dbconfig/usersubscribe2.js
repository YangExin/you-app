const mongoose = require('./db');
const Schema = mongoose.Schema;

//创建表格
// mongoose.createConnection('user', {
//     autoIndexId: true
// })
const subscribe = new Schema({
    name: String,
    id: Number
});

const Subscribe = mongoose.model('Subscribe', subscribe);
// module.exports = User;

module.exports = {
    // checkPhone(phone) {
    //     return Usercatelist.findOne(phone).then(result => {
    //         if (result) { //手机号存在
    //             return Promise.reject();
    //         }
    //         return Promise.resolve();
    //     })
    // },
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
        return Subscribe.find(obj).then(result => {
            if (result) {
                return Promise.resolve({
                    result
                });
            }
            return Promise.reject(false);
        })
    }
}