var db = require('../models');

/* GET ALL CATEGORIES */
function readAll (req, res) {
    db.Category.find({}, function (err, categories) {
      if (err) {
          return console.log(err);
      }
      console.log('Categories from db: ', categories);
      res.json(categories);
    });
}

function create(req, res) {
    console.log('CREATE HIT!');
}
function readOne(req, res) {
    console.log(' READ ONE HIT!');
}
function update(req, res) {
    console.log('UPDATE HIT!');
}
function destroy (req, res) {
    console.log('DESTROY HIT!');
}

module.exports = {
    createCategory: create,
    getAllCategories: readAll,
    getOneCategory: readOne,
    updateCategory: update,
    deleteCategory: destroy 
}