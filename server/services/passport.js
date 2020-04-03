const passport = require('passport')
const User = require('../models/user')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('../config')
const LocalStrategy = require('passport-local')

// Create Local Strategy
const localOptions = {usernameField: 'email'};
const localLogin = new LocalStrategy({localOptions}, function(email,password,done){
  // Verify this email and password, call done with the email if it is the correct password and email(username)
  // Otherwise, call done with false.
  User.findOne({email: email}, function(err,user){
    if(err){return done(err)};
    if(!user){return done(false)};

  //Compare passwords - is 'password' equal to user.password?
  user.comparePassword(password, function(err,isMatch){
    if(err) {return done(err)}
    if(!isMatch){return done(null,false)}

    return done(null,user)
  })

  })
});

// Setup options for jwt Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT strategy
// The first argument is the payload that is comming from the JWT. In our case is the user.id and the timestamp.
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if the user ID in the payload exists in our database.
  User.findById(payload.sub, function (err, user) {
    // Catching errors
    if (err) { return done(err, false) };
    // if it does, call `done` with that user
    if (user) {
      done(null, user);
      // otherwise, call done without a user object
    } else {
      done(null, false);
    }
  });
});

// Tell passport to usee this strategy
passport.use(jwtLogin);
passport.use(localLogin);