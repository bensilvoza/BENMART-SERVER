// libraries
var express = require("express");
var router = express.Router();

// controllers
var { login } = require("../../controllers/customer/login");

router.post("/login", login);

module.exports = router;
