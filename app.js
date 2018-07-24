
var express = require('express');
var port = process.env.PORT || '3004';
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes');


mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mern-crud', { useMongoClient: true, promiseLibrary: require('bluebird') })
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));


// Initialize Express
var app = express();
var snippet = require('./routes/snippet');


// Initialize Express

// Use morgan logger for logging requests
app.use(logger('dev'));
// Use body-parser for handling form submissions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/snippet', snippet);

// Add routes, both API and view
app.use(routes);

module.exports = app;

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});