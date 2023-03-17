const express = require("express");
const { getUser, updateUser } = require("../controllers/user");

const router = express.Router();

router.get("/info", getUser);

router.put("/update", updateUser);


module.exports = router;