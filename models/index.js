// Connect to the Mongo DB
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/snippetstash");

module.exports = {
    Category: require('./Category'),
    // Snippet: require('./Snippet'),
}