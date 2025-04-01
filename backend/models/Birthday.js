const mongoose = require('mongoose');

const birthdaySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        dob: {
            type: Date,
            required: true
        },
        timeOfBirth: { type: String }, // HH:mm
        hinduTithi: { type: String }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Birthday', birthdaySchema);