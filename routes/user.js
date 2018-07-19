var express = require('express');
var router = express.Router();

//require User model in routes module
var User = require('../models/User');
/* Sign Up */
router.post('/register', function(req, res, next)  {
  const { body } = req;
  const {
      
      email,
      password,
  } = body;

  if (!email) {
      res.end({
          success: false,
          message: "Error: Email cannot be blank."
      });
  }

  if (!password) {
      res.end({
          success: false,
          message: "Error: Password cannot be blank."
      });
  }
  email = email.toLowerCase();

  //Steps:
  //1. Verify email doesn't exist
  //2. Save
  User.find ({
      email: email
  }), (err, previousUsers) =>{
      if (err) {
          res.end({
              success:false,
              message:"Error: Server Error"
          });
      }   else if (previousUsers.length > 0) {

          res.end({
              success:true,
              message:"Error: Account already exists"
          });
      }   
  }
})





module.exports = router;
