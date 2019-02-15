const mongoose = require('./db');
const Schema = mongoose.Schema;

//创建表格
// mongoose.createConnection('user', {
//     autoIndexId: true
// })
const address = new Schema({
    adminId: String,
    user: String,
    tel:String,
    address:String
});

const Address = mongoose.model('Address', address);
// module.exports = User;
module.exports = {
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
        return Address.find(obj).then(result => {
            // console.log(obj, result);
            if (result) {
                return Promise.resolve({
                    result
                });
            }
            return Promise.reject(false);
        })
    }
}