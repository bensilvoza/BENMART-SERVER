// libraries
var express = require("express");
var router = express.Router();

// controllers
var { register } = require("../../controllers/customer/register");

router.post("/register", register);

module.exports = router;
