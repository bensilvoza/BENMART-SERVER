// libraries
var express = require("express");
var router = express.Router();
var { storage } = require("../../cloudinary");
var multer = require("multer");
var upload = multer({ storage });

// controllers
var {
  administratorProducts,
  administratorProductsID,
  administratorProductsCreate,
  administratorProductsIDEditGet,
  administratorProductsIDEditPost,
} = require("../../controllers/administrator/products");

router.get("/administrator/products", administratorProducts);

router.get("/administrator/products/:ID", administratorProductsID);

router.post(
  "/administrator/products/create",
  upload.array("uploadedImage"),
  administratorProductsCreate
);

router.get("/administrator/products/:ID/edit", administratorProductsIDEditGet);

router.post(
  "/administrator/products/:ID/edit",
  administratorProductsIDEditPost
);

module.exports = router;
