var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//require User model in routes module
var User = require('../models/User');

// /* GET users listing. */

/* GET ALL User Info */

router.get('/add/post').post(function(req, res) {
  var user= new User(req.body);
    user.save()
    .then(item => {
      res.json("User added successfully");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
  });

/* GET SINGLE User BY ID */
router.get('/register:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE User */
router.post('/register', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE User */
router.put('/register:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE User */
router.delete('/register:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});




module.exports = router;
