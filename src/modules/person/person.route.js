const PersonController = require('./person.controller');
const express = require('express');
const router = express.Router();

router.get('/export', [
    PersonController.exportCSV
]);

module.exports = router;