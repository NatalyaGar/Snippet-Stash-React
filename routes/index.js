var express = require('express');
var router = express.Router();

var categories = require('./categories');

/* GET home page. */
router.use('/api/categories', categories);
// router.use('/api/snippets', snippets);

module.exports = router;
