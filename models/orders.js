const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orders: {
        type: Array
    },
    phoneNumber: {
        type: String
    }
}, {
    timestamps: true
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order