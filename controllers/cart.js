const Cart = require('../models/cart');

const addItemToCart = async (req, res) => {

    try {
        const id = req.headers.id;
        if (!id) res.status(403).send("Login to add item.");
        const item = req.body.item;
        const total = item.price;
        const user_cart = await Cart.findOne({ userId: id });
        if (user_cart) {
            user_cart.items.push(item);
            user_cart.subtotal += total;
            await user_cart.save();
            res.status(200).send(user_cart);
        }
        else {
            const cart_items = [item];
            const newCart = Cart({
                userId: id,
                items: cart_items,
                subtotal: total
            })
            await newCart.save();
            res.status(200).send(newCart);
        }
    }
    catch (err) {
        res.status(404).send(err);
    }
}

const getUserCart = async (req, res) => {
    try {
        const id = req.headers.id;
        const user_cart = await Cart.findOne({ userId: id });
        res.status(200).send(user_cart);
    }
    catch (err) {
        res.status(404).send(err);
    }
}

const clearCart = async (req, res) => {
    try {
        // const id = 
        const cart = await Cart.deleteOne({ userId: id })
        res.status(200).send("Cart Cleared")
    }
    catch (err) {
        res.status(404).send(err);
    }
}

module.exports = { addItemToCart, getUserCart }