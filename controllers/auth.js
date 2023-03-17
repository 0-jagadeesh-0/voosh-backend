const User = require('../models/user');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

const signup = async (req, res) => {
    try {
        const newUser = await User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10),
            phoneNumber: req.body.phoneNumber
        })
        await newUser.save();
        const data = { name: newUser.firstName + " " + newUser.lastName, email: newUser.email, username: newUser.username, phoneNumber: newUser.phoneNumber }
        res.status(200).send(data);
    }
    catch (err) {
        res.status(404).send(err);
    }
}

const signin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        let user = await User.findOne({ username });
        if (user == null) {
            user = await User.findOne({ phoneNumber: username });
        }
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                const id = user._id;
                const token = generateToken(id);
                const data = { jwt: token, userId: id };
                res.status(200).send(data);
            }
            else {
                res.status(404).send("Incorrect Password");
            }

        }
        else {
            res.status(401).send("Unauthorized");
        }

    }
    catch (err) {
        res.status(404).send(err)
    }
}

module.exports = { signup, signin }
