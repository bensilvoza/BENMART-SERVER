var express = require("express");
var router = express.Router();
var {
  administratorProducts,
  administratorProductID,
  administratorProductsCreate,
  administratorProductIDEditGet,
  administratorProductIDEditPost,
} = require("../../controllers/administrator/products");

router.get("/administrator/products", somemiddleware, administratorProducts);

router.get(
  "/administrator/product/:ID",
  somemiddleware,
  administratorProductID
);

router.post("/administrator/products/create", administratorProductsCreate);

router.get(
  "/administrator/product/:ID/edit",
  somemiddleware,
  administratorProductIDEditGet
);

router.post(
  "/administrator/product/:ID/edit",
  somemiddleware,
  administratorProductIDEditPost
);

module.exports = router;
