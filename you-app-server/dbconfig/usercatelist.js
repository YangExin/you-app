const mongoose = require('./db');
const Schema = mongoose.Schema;

//创建表格
// mongoose.createConnection('user', {
//     autoIndexId: true
// })
const usercatelist = new Schema({
    userId: String,
    catelistId: Number,
    state: Number
});

const Usercatelist = mongoose.model('Usercatelist', usercatelist);
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
        return Usercatelist.find(obj).then(result => {
            if (result) {
                let _doc = result.map(({ userId, catelistId, state }) => {
                        return {
                            userId,
                            catelistId,
                            state
                        }
                    })
                    // let doc = _doc[0].state;
                let catelistId = _doc.map(({ catelistId }) => {
                        return {
                            catelistId
                        }
                    })
                    // let [id1, id2, id3, id4] = catelistId;
                    // let { catelistId } = id1;
                    // let { catelistId } = id2;
                    // let { catelistId } = id3;
                    // let { catelistId } = id4;
                return Promise.resolve({
                    // _doc,
                    // id1,
                    // id2,
                    // id3,
                    // id4
                    catelistId
                });
            }
            return Promise.reject(false);
        })
    }
}