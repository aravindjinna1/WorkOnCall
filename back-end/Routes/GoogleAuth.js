const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../Database/registrationSchema");
const express = require('express');
const router = express.Router();
require("dotenv").config(); const { createToken } = require("../utils/jwt");
const authMiddleware = require("../utils/authMiddleware");


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // 🔹 profile data from Google
        const googleId = profile.id;
        const email = profile.emails[0].value;
        const name = profile.displayName;
        const avatar = profile.photos[0].value;

        // 🔍 Find user in DB
        let user = await User.findOne({ googleId });

        // ➕ Create user if not exists
        if (!user) {
          user = await User.create({
            googleId,
            fullname: name,
            email,
            avatar,
            provider: "google",
          });
        }

        // ✅ Send DB user to req.user
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);


router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = createToken(req.user);
    res.redirect(`http://localhost:5173/login-success?token=${token}`);
    
  }
);


module.exports = router