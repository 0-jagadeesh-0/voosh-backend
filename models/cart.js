const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: {
        type: Array
    },
    subtotal: {
        type: Number
    }
}, { timestamps: true })

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;