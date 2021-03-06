const PersonModel = require('./person.model');
const Singleton = require('../../core/utility/commonSingleton.service')
const objSingleton = Singleton.getInstance()

exports.exportCSV = (req, res) => {
    PersonModel.exportCSV()
        .then((result) => {
            objSingleton.exportCSV(result, 'public/storage/person.csv')
                .then((response) => {
                    res.status(200).send(response);
                });
        });
}