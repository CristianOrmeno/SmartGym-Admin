const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const alumnoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    enrollmentDate: {
        type: Date,
        default: Date.now,
    },
});

// Hash password before saving the student
alumnoSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('Alumno', alumnoSchema);