const PersonModel = require('./person.model');


exports.list = (req, res) => {
    PersonModel.list()
        .then((result) => {
            console.log('mykeys');
            res.status(200).send(result);
        })
}