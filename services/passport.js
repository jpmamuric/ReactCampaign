const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose       = require('mongoose');
const moment         = require('moment');
const keys           = require('../config/keys');

const User = mongoose.model('users')

function createFormattedDate() {
  var date = new Date();
  var format = ('LL');
  var today = moment(date).format(format);
  return today;
}

passport.serializeUser((user, done) => {
  //using user.id (mlab db id) for multiple oauth services purpose
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //accessing mongo db is async, use promise callbacks
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });

    if(existingUser) {
      return done(null, existingUser);
    } else {
      const user = await new User({ googleId: profile.id, createdAt: createFormattedDate() }).save();
      done(null, user);
    }
  })
);
