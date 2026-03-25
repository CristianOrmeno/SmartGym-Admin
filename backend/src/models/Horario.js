const mongoose = require('mongoose');

const horarioSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    daysOfWeek: {
        type: [String],
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        required: true,
    },
    room: {
        type: String,
        required: true,
    },
},{
    timestamps: true
});

module.exports = mongoose.model('Horario', horarioSchema);