
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

// Requiring the `User` model for accessing the 'snippets' and `users` collection
var snippet = require('./routes/snippet');
var user = require("./routes/user");
var signin = require("./routes/signin");


// Initialize Express
var app = express();


// Initialize Express

// Use morgan logger for logging requests
app.use(logger('dev'));
// Use body-parser for handling form submissions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use(express.static(path.join(__dirname, 'public')));


// app.use('/api/snippet', snippet);
// app.use('/api/user', user);
// app.use('/api/signin', signin);

// Add routes, both API and view
app.use(routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});