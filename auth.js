const passport = require('koa-passport');
const BasicStrategy = require('passport-http').BasicStrategy;

const User = require('./models/users');

passport.use(new BasicStrategy(
    function(userid, password, done) {
      User.findOne({ email: userid, password: password}, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });
    }
  ));