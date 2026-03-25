const mongoose = require('mongoose');

const asistenciaSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date },
    attendanceDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Asistencia', asistenciaSchema);