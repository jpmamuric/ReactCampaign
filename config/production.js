module.exports = {
  googleClientID : process.env.GOOGLE_CLIENT_ID,
  googleClientSecret : process.env.GOOGLE_CLIENT_SECRET,
  mongoURI : process.env.MONGO_URI,
  cookieKey : process.env.COOKIE_KEY,
  stripePK : process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSK : process.env.STRIPE_SECRET_KEY,
  sendGridKey : process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN
};


// passport.use(new FacebookStrategy({
//     clientID: config.facebookAuth.clientID,
//     clientSecret: config.facebookAuth.clientSecret,
//     callbackURL: config.facebookAuth.callbackURL,
//     proxy: true
//   },
//   async (accessToken, refreshToken, profile, done) => {
//     const existingUser = await User.findOne({ facebookID: profile.id });
//
//     if(existingUser) {
//       return done(null, existingUser);
//     } else {
//       const user = await new User({
//         facebookID    : profile.id,
//         facebookToken : accessToken,
//         facebookEmail : profile.emails[0].value,
//         facebookName  : profile.name.givenName + ' ' + profile.name.familyName
//       }).save();
//
//       done(null, user);
//     }
//   })
// );
