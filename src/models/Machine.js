const mongoose = require('mongoose');

const machineSchema = new mongoose.Schema({
    reference: { type: String, unique: true, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    workshop: { type: String, required: true, trim: true },
    status: {type : String , enum: ["disponible", "en maintenance", "hors service"] , default : "disponible" },
}, { timestamps: true } )


module.exports = mongoose.model('Machine', machineSchema);