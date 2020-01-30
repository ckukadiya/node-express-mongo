const FriendShipModel = require('./friendShip.model')
const Singleton = require('../../core/utility/commonSingleton.service')
const objSingleton = Singleton.getInstance()

exports.exportCSV = (req, res) => {
    FriendShipModel.exportCSV()
        .then((result) => {
            objSingleton.exportCSV(result, 'public\\storage\\friendShip.csv')
                .then((response) => {
                    res.status(200).send(response);
                });
        });
};