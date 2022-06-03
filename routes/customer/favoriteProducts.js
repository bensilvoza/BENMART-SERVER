// libraries
var express = require("express");
var router = express.Router();

// controllers
var {
  favoriteProductsList,
  favoriteProducts,
} = require("../../controllers/customer/favoriteProducts");

router.get("/favorite", favoriteProductsList);
router.post("/favorite", favoriteProducts);

module.exports = router;
