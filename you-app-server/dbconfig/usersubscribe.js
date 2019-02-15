const mongoose = require('./db');
const Schema = mongoose.Schema;

//创建表格
// mongoose.createConnection('user', {
//     autoIndexId: true
// })
const usersubscribe = new Schema({
    userId: String,
    subscribeId: Number,
    state: Number
});

const Usersubscribe = mongoose.model('Usersubscribe', usersubscribe);
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
        return Usersubscribe.find(obj).then(result => {
            if (result) {
                let _doc = result.map(({ userId, subscribeId, state }) => {
                        return {
                            userId,
                            subscribeId,
                            state
                        }
                    })
                    // let doc = _doc[0].state;
                let subscribeId = _doc.map(({ subscribeId }) => {
                    return {
                        subscribeId
                    }
                })
                return Promise.resolve({
                    subscribeId
                });
            }
            return Promise.reject(false);
        })
    }
}