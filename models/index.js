// Connect to the Mongo DB
var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mern-crud")
    .then(() => console.log(`Connection to snippetstash was successful!`))
    .catch(error => console.log(`Connection to database unsuccessful: ${error}`));

module.exports = {
    Category: require('./Category'),
    Snippet: require('./Snippet'),
}