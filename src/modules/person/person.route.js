const PersonController = require('./person.controller');
const express = require('express');
const router = express.Router();

router.get('/', [
    PersonController.list
]);

module.exports = router;