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

//   /* GET SINGLE SNIPPET BY ID */
// router.get('/:id', function(req, res, next) {
//     Book.findById(req.params.id, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });
  
//   /* SAVE SNIPPET */
//   router.post('/', function(req, res, next) {
//     Book.create(req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });
  
//   /* UPDATE SNIPPET */
//   router.put('/:id', function(req, res, next) {
//     Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });
  
//   /* DELETE SNIPPET */
//   router.delete('/:id', function(req, res, next) {
//     Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });

module.exports = {
    createCategory: create,
    getAllCategories: readAll,
    getOneCategory: readOne,
    updateCategory: update,
    deleteCategory: destroy 
}