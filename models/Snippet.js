var mongoose = require('mongoose');

var SnippetSchema = new mongoose.Schema({
  category: String,
  title: String,
  author: String,
  description: String,
  comment: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Snippet', SnippetSchema);
