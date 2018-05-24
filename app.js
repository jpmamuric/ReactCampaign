const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser'); //POST, PUT, PATCH request paresed and assigned to req.body of incomng request object
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// INITIALIZE MODELS
require('./models/user');
require('./models/surveys');
require('./models/posts');
require('./models/comments');

//INITIALIZE SERVICES
require('./services/passport');

// INITIALIZE ROUTES
const index = require('./routes/index');
const surveyRoute = require('./routes/survey');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const commentRoute = require('./routes/comment');

// INITIALIZE MONGOOSE
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

const app = express();

// MIDDLEWARE
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', index);
app.use('/api/surveys', surveyRoute);
app.use('/api/posts', postRoute);
app.use('/api/comments', commentRoute);
app.use('/auth', authRoute);


// ROUTING
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// ERROR HANDLING
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
