const User = require('../models/user');

const getUser = async (req, res) => {
    try {
        const id = req.headers.id;
        const user = await User.findOne({ _id: id });
        res.status(200).send(user);
    }
    catch (err) {
        res.status(404).send(err);
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.headers.id;
        const user = await User.findByIdAndUpdate({ _id: id }, {
            $set: req.body
        },
            { new: true }
        )
        res.status(200).send(user);
    }
    catch (err) {
        res.status(404).send(err);
    }
}

module.exports = { getUser, updateUser };