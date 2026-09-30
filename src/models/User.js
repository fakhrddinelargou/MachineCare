const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        full_name: { type: String ,  required: [true, 'Nom requis'], trim: true, lowercase: true },
        email: { type: String, required: [true, 'Email requis'], unique: true, lowercase: true, trim: true },
        password: { type: String, required: [true, 'Password requis '] },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);