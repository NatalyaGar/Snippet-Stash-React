var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../models');

var categoryController = require('../controllers/categories');

router.route('/')
    .get(categoryController.getAllCategories)
    .post(categoryController.createCategory);

router.route('/:id')
    .get(categoryController.getOneCategory)
    .put(categoryController.updateCategory)
    .delete(categoryController.deleteCategory);
  
module.exports = router;