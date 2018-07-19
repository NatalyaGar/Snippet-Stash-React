const User = require("../models/User");


var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');



module.exports = (register) => {} 

/* GET ALL Users */
router.get('/register', function(req, res, next) {
    User.find(function (err, email) {
      if (err) return next(err);
      res.json(email);
    });
  });
  

  /* GET SINGLE USER BY ID */
router.get('/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* Sign Up */
  router.post('/sign-up', function(req, res, next)  {
    const { body } = req;
    const {
        firstName, 
        lastName,
        email,
        password,
    } = body;

    if (!firstName) {
        return res.json({
            success: false,
            message: "Error: First name cannot be blank."
        });
    }

    if (!lastName) {
        return res.json({
            success: false,
            message: "Error: Last name cannot be blank."
        });
    }
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

    //Steps:
    //1. Verify email doesn't exist
    //2. Save
    User.findOne ({
        email: email
    }), (err, previousUsers) =>{
        if (err) {
            return res.json({
                success:false,
                message:"Error: Server Error"
            });
        }   else if (previousUsers) {

            return res.json({
                success:true,
                message:"Error: Account already exists"
            });
        }   

        //Save the new user
        const newUser = new User ();

        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName= lastName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) =>{
            if(err) {
                return res.json({
                    success:false,
                    message:"Error: Server Error"
                });
            } else {
    
                return res.json({
                    success: true,
                    message:"Signed Up"
                });
            };
        })
    }
  })


  