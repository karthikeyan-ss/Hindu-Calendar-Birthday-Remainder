const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
dotenv.config();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:5000/auth/google/callback'
        },
        function (accessToken, refreshToken, profile, done) {
            // Authentication tharvatha User's Google Profile ni ikkada handle chestham
            return done(null, profile);
        }
    )
)

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));