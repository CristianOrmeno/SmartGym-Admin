const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    amount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['CREDIT_CARD', 'DEBIT_CARD', 'PAYPAL'],
        required: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['PENDING', 'COMPLETED', 'FAILED'],
        default: 'PENDING'
    }
});

module.exports = mongoose.model('Pago', pagoSchema);