// libraries
var express = require("express");
var router = express.Router();

// middleware
var { verifyToken } = require("../../middleware");

// controllers
var { orders, getOrders } = require("../../controllers/customer/orders");

router.get("/orders", getOrders);
router.post("/orders", verifyToken, orders);

module.exports = router;
