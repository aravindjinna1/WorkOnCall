const passport = require("passport");
require("dotenv").config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../Database/registrationSchema");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ email: profile.emails[0].value });
      if (existingUser) {
        return done(null, existingUser);
      }
           console.log(existingUser);
           
      const newUser = await User.create({
        name: profile.displayName,
        email: profile.emails[0].value,
        provider: "google",
        providerId: profile.id,
      });
      done(null, newUser);

      console.log(newUser);
      
    }
  )
);

passport.use(new FacebookStrategy({
    clientID:process.env.FACEBOOK_CLIENT_ID,
    clientSecret:process.env.FACEBOOK_CLIENTSECRET_KEY,
    callbackURL:'http://localhost:3000/api/facebook/callback',
    profileFields:['id', 'displayName', 'emails']
},
   async (accessToken, refreshToken, profile, done)=>{
        const existingUser = await User.findOne({email: profile.emails[0].value});
        if(existingUser) return done(null, existingUser)
   
        const newUser = await User.create({
            name:profile.displayName,
            email:profile.emails[0],
            provider:'facebook',
            providerId:profile.id
        })    
        done(null, newUser);
    }
))

module.exports = passport;