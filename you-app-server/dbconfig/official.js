const mongoose = require('./db');
const Schema = mongoose.Schema;

//创建表格
// mongoose.createConnection('user', {
//     autoIndexId: true
// })
const officiallist = new Schema({
    title: String,
    date: String,
    txt1: String,
    txt2: String,
    txt3: String,
    img1: String,
    img2: String,
    img3: String,
    t1:String,
    t2:String
});

const Officiallist = mongoose.model('Officiallist', officiallist);
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
        return Officiallist.find(obj).then(result => {
            if (result) {
                return Promise.resolve({
                    result
                });
            }
            return Promise.reject(false);
        })
    }
}