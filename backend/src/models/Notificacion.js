const mongoose = require('mongoose');

const NotificacionSchema = new mongoose.Schema({
    tipo: { // Type of notification
        type: String,
        required: true,
    },
    mensaje: { // Notification message
        type: String,
        required: true,
    },
    usuarioId: { // ID of the user receiving the notification
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    fechaCreacion: { // Creation date of the notification
        type: Date,
        default: Date.now,
    },
    leido: { // Read status
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Notificacion', NotificacionSchema);