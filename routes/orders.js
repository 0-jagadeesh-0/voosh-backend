const express = require("express");
const { addOrder, getUserOrders } = require("../controllers/orders");
const { verifyToken } = require("../utils/verifyToken");

const router = express.Router();

router.post("/add", verifyToken, addOrder);

router.get("/items", verifyToken, getUserOrders);


module.exports = router;