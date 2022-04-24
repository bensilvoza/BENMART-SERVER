// libraries
var express = require("express");
var { storage } = require("../../cloudinary");
var multer = require("multer");
var upload = multer({ storage });

var Product = require("../../models/product");
var ProductImage = require("../../models/productImage");

async function administratorProducts() {
  // ...
}

async function administratorProductsID() {
  // ...
}

async function administratorProductsCreate(req, res) {
  var images = [];
  for (var i = 0; i < req.files.length; i++) {
    var image = {};
    (image["ID"] = Math.floor(Math.random() * 1000000000)),
      (image["url"] = req.files[i]["path"]),
      (image["filename"] = req.files[i]["filename"]);
    images.push(image);
  }

  var productDetails = {
    ID: req.body.ID,
    name: req.body.name,
    images: images,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    category: req.body.category,
  };

  productDetails = new Product(productDetails);
  await productDetails.save();
  res.json({ message: "OK" });
}

async function administratorProductsIDEditGet() {
  // ...
}

async function administratorProductsIDEditPost() {
  // ...
}

module.exports = {
  administratorProducts,
  administratorProductsID,
  administratorProductsCreate,
  administratorProductsIDEditGet,
  administratorProductsIDEditPost,
};

// below this line is a temporary file
// ...
// TESTING
// npm run code
// administratorProductsCreate();
