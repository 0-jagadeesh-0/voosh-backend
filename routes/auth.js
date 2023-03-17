const express = require("express");
const { signup, signin } = require("../controllers/auth");

const router = express.Router();

router.post("/add-user", signup);

router.post("/login-user", signin);

module.exports = router;