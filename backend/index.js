require('dotenv').config();
require('./config/oauth');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const passport = require('passport');
const session = require('express-session');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Set up the session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Route for Google login
app.get('/auth/google', passport.authenticate('google', { scope: ["profile", "email"] }));

// Google authentication tharvatha Callback Route

app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful ga login ayithey, Frontend ki JWT Tokens send chestham
        const token = generateJWT(req.user); // Generate JWT
        res.redirect(`http://localhost:3000/dashboard?token=${token}`); // Frontend ki token tho redirect chesthundhi
    }
)

// JWT generation function
function generateJWT(user) {
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({
        id: user.id,
        name: user.displayName
    }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return token;
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});