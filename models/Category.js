var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  item: String,
});

module.exports = mongoose.model('Category', CategorySchema);