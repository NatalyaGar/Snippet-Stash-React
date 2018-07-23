var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Snippet = require('../models/Snippet.js');
var db = require("../models");

/* GET ALL SNIPPETS */
router.get('/', function(req, res, next) {
  Snippet.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE SNIPPET BY ID */
router.get('/:id', function(req, res, next) {
  Snippet.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE SNIPPET */
router.post('/', function(req, res, next) {
  Snippet.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE SNIPPET */
router.put('/:id', function(req, res, next) {
  Snippet.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE SNIPPET */
router.delete('/:id', function(req, res, next) {
  Snippet.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



//  // Get route for returning snippets of a specific category
//  router.get("/api/snippets/:CategoryId", function (req, res) {
//   // Add code to find all Snippets where the category is equal to req.params.category,
//   // return the result to the user with res.json
//   db.Snippet.findAll({
//     where: {
//       CategoryId: req.params.CategoryId
//     }
//   }).then(function (dbSnippet) {
//     res.json(dbSnippet);
//   });

// });

// //route used for member filtered view by category
// router.get("/api/user/snippets/:CategoryId/", function (req, res) {

//   // Add code to find all Snippets where the category is equal to req.params.category,
//   // return the result to the user with res.json
//   db.Snippet.findAll({
//     where: {
//       CategoryId: req.params.CategoryId,
//       UserId: req.user.id
//     }
//   }).then(function (dbSnippet) {
//     res.json(dbSnippet);
//   });
// });

// //route used to get member
// router.get("/api/user/", function (req, res) {

//   // Add code to find all Snippets where the category is equal to req.params.category,
//   // return the result to the user with res.json
//   db.Snippet.findOne({
//     where: {
//       UserId: req.user.id
//     }
//   }).then(function (dbSnippet) {
//     res.json(dbSnippet);
//   });
// });





module.exports = router;
