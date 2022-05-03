// libraries
var express = require("express");
var router = express.Router();

// controllers
var { products, product } = require("../../controllers/customer/products");

router.get("/products", products);
router.get("/products/:ID", product);

module.exports = router;
