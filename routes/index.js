var express = require('express');
var router = express.Router();

var categories = require('./categories');
var snippets = require('./snippet')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.use('/api/categories', categories);
router.use('/api/snippets', snippets);
// router.use('/api/users', users);


module.exports = router;
