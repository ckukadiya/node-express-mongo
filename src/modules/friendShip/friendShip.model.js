const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendShipSchema = new Schema({
    person1: { type: String, default: '' },
    person2: { type: String, default: '' },
    date: { type: Date, default: '' }
})

FriendShipSchema.set('toJSON', {
    virtuals: true
});

const FriendShip = mongoose.model('friendShip', FriendShipSchema, 'friendship');

exports.exportCSV = () => {
    return new Promise((resolve, reject) => {
        FriendShip.find().exec((err, friendShip) => {
            if (err)
                reject(err)
            else
                resolve(friendShip)
        })
    })
}
