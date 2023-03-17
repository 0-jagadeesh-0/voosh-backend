const Orders = require('../models/orders');
const Cart = require('../models/cart');
const User = require('../models/user')

const addOrder = async (req, res) => {
    try {
        const id = req.headers.id;
        const user_cart = await Cart.findOne({ userId: id });
        const user_orders = await Orders.findOne({ userId: id });
        const user = await User.findById(id);
        const phone = user.phoneNumber;
        // const items = user_cart.items;
        if (user_orders) {
            console.log(user_orders);
            user_orders.orders.push({ orderItems: user_cart.items, total: user_cart.subtotal, phoneNumber: phone });
            await user_orders.save();
            await Cart.deleteOne({ userId: id });
            res.status(200).send(user_orders);
        }
        else {
            const order = [{ orderItems: user_cart.items, total: user_cart.subtotal, phoneNumber: phone }];
            const newOrder = Orders({
                userId: id,
                orders: order
            })
            await newOrder.save();
            await Cart.deleteOne({ userId: id });
            res.status(200).send(newOrder);
        }
    }
    catch (err) {
        res.status(404).send(err);
    }
}

const getUserOrders = async (req, res) => {
    try {
        const id = req.headers.id;
        const user_orders = await Orders.findOne({ userId: id });
        res.status(200).send(user_orders);
    }
    catch (err) {
        res.status(404).send(err);
    }
}

module.exports = { addOrder, getUserOrders }