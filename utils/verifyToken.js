const jwt = require("jsonwebtoken");
const User = require("../models/user");

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader;
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                res.status(401).json("Token is not valid.");
            }
            req.user = user;
            next();
        })
    }
    else {
        res.status(400).json("Not Authenticated.")
    }
}

const verifyTokenAndAuthorization = async (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id) {
            next();
        }
        else {
            res.status(401).json("You are not allowed to edit.")
        }
    })
}


module.exports = { verifyToken, verifyTokenAndAuthorization };
