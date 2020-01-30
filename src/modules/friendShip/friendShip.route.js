const FriendShipController = require('./friendShip.controller');
const express = require('express');
const router = express.Router();

router.get('/export', [
    FriendShipController.exportCSV
]);

module.exports = router;
