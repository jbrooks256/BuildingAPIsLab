const express = require('express'),
chirpsRouter = require('./chirps');

let router = express.Router();

router.use('/chirps', chirpsRouter);

module.exports = router;