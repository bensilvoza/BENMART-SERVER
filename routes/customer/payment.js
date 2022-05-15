// libraries
var express = require("express");
var router = express.Router();

// controllers
var { payment } = require("../../controllers/customer/payment");

router.post("/payment", payment);

module.exports = router;
