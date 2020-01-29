const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/add', function(req, res, next) {
    res.send('respond with a resource temp');
});

router.get('/list', function(req, res, next) {
    res.send('list here temp');
});

module.exports = router;