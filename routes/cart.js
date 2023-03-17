const express = require("express");
const { addItemToCart, getUserCart } = require("../controllers/cart");
const { verifyTokenAndAuthorization, verifyToken } = require("../utils/verifyToken");

const router = express.Router();

router.post("/add", verifyToken, addItemToCart);

router.get("/items", verifyToken, getUserCart);


module.exports = router;