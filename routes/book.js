var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

/* GET ALL SNIPPETS */
router.get('/', function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE SNIPPET BY ID */
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE SNIPPET */
router.post('/', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE SNIPPET */
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE SNIPPET */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
