const db = require("../models/");


var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* Go to main page */
// router.get('/register', function(req, res, next) {
//     User.find(function (err, email) {
//       if (err) return next(err);
//       res.json(email);
//     });
//   });
  

  /* GET SINGLE USER BY ID */
router.get('/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* Sign Up */
//   router.post('/sign-up', function(req, res, next)  {
    router.post('/register', function(req, res, next)  {
    console.log('sign-up hit');
    const { body } = req;
    let {
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

    // console.log({ email: email })

    //Steps:
    //1. Verify email doesn't exist
    //2. Save
    // let query  = db.User.where();
    db.User.findOne({ email: email }, (err, user) => {
        if (err) {
            return res
                .status(500)
                .json({
                    success: false,
                    message: "Error: Server Error " + err
                });
        }
        if (user) {
            return res
                .status(400)
                .json({
                    success: true,
                    message:"Error: Account already exists"
                });
        } else {
            console.log('Save User')
            const newUser = new db.User();

          
            newUser.firstName = firstName;
            newUser.lastName= lastName;
            newUser.email = email;
            newUser.password = newUser.generateHash(password);

            console.log(newUser)

            newUser.save((err, user) =>{
                if(err) {
                    return res
                        .status(500)
                        .json({
                            success: false,
                            message: "Error: Server Error " + err
                        });
                } else {
        
                    return res.json({
                        success: true,
                        message:"Signed Up"
                    });
                };
            })
        }
    });


    // User.findOne ({
    //     email: email
    // }), (err, previousUsers) =>{
    //     console.log('Inside')
    //     if (err) {
    //         return res.json({
    //             success:false,
    //             message:"Error: Server Error"
    //         });
    //     }   else if (previousUsers) {

    //         return res.json({
    //             success:true,
    //             message:"Error: Account already exists"
    //         });
    //     }   

    //     //Save the new user
    //     
    // }
  });

  module.exports = router;


  