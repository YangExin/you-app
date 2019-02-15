const mongoose = require('./db');
const Schema = mongoose.Schema;

//创建表格
// mongoose.createConnection('user', {
//     autoIndexId: true
// })
const catelist = new Schema({
    id: Number,
    name: String,
    price: Number,
    img: String,
    introduce: String
});

const Catelist = mongoose.model('Catelist', catelist);
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
        return Catelist.find(obj).then(result => {
            if (result) {
                return Promise.resolve({
                    result
                });
            }
            return Promise.reject(false);
        })
    }
}