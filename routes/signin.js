var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//require User model in routes module
var User = require('../models/User');

/* GET ALL Users */
router.get('/sign-in', function(req, res, next) {
    User.find(function (err, email) {
      if (err) return next(err);
      res.json(email);
    });
  });
  
/* Sign Up */
router.post('/sign-in', function(req, res, next)  {
  const { body } = req;
  const {
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

  User.find ({
  //Steps:
  //1. Verify email doesn't exist
  //2. Save
      email: email
  }), (err, previousUsers) =>{
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
