// libraries
var express = require("express");
var router = express.Router();

// controllers
var { orders, getOrders } = require("../../controllers/customer/orders");

router.get("/orders", getOrders);
router.post("/orders", orders);

module.exports = router;
