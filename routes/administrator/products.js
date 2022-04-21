var express = require("express");
var router = express.Router();
var {
  administratorProducts,
  administratorProductID,
  administratorProductsCreate,
  administratorProductIDEditGet,
  administratorProductIDEditPost,
} = require("../../controllers/administrator/products");

router.get("/administrator/products", administratorProducts);

router.get("/administrator/product/:ID", administratorProductID);

router.post("/administrator/products/create", administratorProductsCreate);

router.get("/administrator/product/:ID/edit", administratorProductIDEditGet);

router.post("/administrator/product/:ID/edit", administratorProductIDEditPost);

module.exports = router;
