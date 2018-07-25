var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/');

/* GET ALL Users */
router.get('/sign-in', function(req, res, next) {
    User.find(function (err, email) {
      if (err) return next(err);
      res.json(email);
    });
  });
  
  router.get('/:id', function(req, res, next) {
       User.findById(req.params.id, function (err, post) {
       if (err) return next(err);
       res.json(post);
     });
  });
/* Sign In */
router.post('/sign-in', function(req, res, next)  {
  let { body } = req;
  let {
      email,
      password,
  } = body;

  if (!email) {
      return res.json({
          success: false,
          message: "Error: Email cannot be blank."
      });
  }

  if (!password) {
     return res.json({
          success: false,
          message: "Error: Password cannot be blank."
      });
  }
  email = email.toLowerCase();

  User.findOne ({
  //Steps:
  //1. Verify email doesn't exist
  //2. Save
      email: email
  }, (err, previousUsers) => {
      if (err) {
         return res.json({
              success:false,
              message:"Error: Server Error"
          });
      }   else if (previousUsers.length > 0) {

          return res.json({
              success:true,
              message:"Error: Account already exists"
          });
      }   
  }
})


module.exports = router;
