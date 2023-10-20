
const passport = require("passport")
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;

const GOOGLE_CLIENT_ID ='52908150198-4j4m5lmpmo6gimttqr0d5hpbjdapuic2.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET= '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'

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
     
  },
  function(request, accessToken, refreshToken, profile, done) {
    
      return done(null, profile);
    
  }
));

passport.serializeUser(function(user, done){
    done(null, user)
})
passport.deserializeUser(function(user, done){
    done(null, user)
})


