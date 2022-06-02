// libraries
var express = require("express");
var router = express.Router();

// controllers
var {
  favoriteProducts,
} = require("../../controllers/customer/favoriteProducts");

router.post("/favorite", favoriteProducts);

module.exports = router;
