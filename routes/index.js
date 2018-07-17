var express = require('express');
var router = express.Router();

var categories = require('./categories');

/* GET home page. */
router.use('/api/categories', categories);
// router.use('/api/snippets', snippets);
// router.use('/api/users', users);

module.exports = router;
