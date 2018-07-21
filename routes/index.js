var express = require('express');
var router = express.Router();

var categories = require('./categories');
var snippets = require('./snippet');
var signin = require('./signin');
var users = require('./user')


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.use('/api/categories', categories);
router.use('/api/snippets', snippets);
router.use('/api/signin', signin);
router.use('/api/user', users);


module.exports = router;
