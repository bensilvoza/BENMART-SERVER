// libraries
var express = require("express");
var router = express.Router();

// controllers
var { home } = require("../../controllers/customer/home");

router.get("/", home);

module.exports = router;
