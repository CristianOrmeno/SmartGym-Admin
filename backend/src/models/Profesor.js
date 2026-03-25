const mongoose = require('mongoose');

const ProfesorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    hireDate: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Profesor', ProfesorSchema);