const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    _id: {type: Number, default: ''},
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    age: { type: String, default: '' },
    state: { type: String, default: '' },
})

PersonSchema.set('toJSON', {
    virtuals: true
});

const Person = mongoose.model('Person', PersonSchema, 'person');

exports.list = () => {
    return new Promise((resolve, reject) => {
        Person.find().exec((err, person) => {
            if (err)
                reject('err');
            else
                resolve(person);
        })
    })
}