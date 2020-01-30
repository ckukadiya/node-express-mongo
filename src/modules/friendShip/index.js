const FriendShipRoute = require('./friendShip.route');
module.exports = ((app) => {
    app.use('/friendship', FriendShipRoute);
});
