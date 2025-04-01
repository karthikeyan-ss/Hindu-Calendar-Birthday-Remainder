const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profilePic: {
        type: String
    }
}, { timestamps: true }
)

module.exports = mongoose.model('User', userSchema);