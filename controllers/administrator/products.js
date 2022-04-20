var express = require("express");
var Product = require("../../models/product");
var ProductImage = require("../../models/productImage");

async function administratorProducts() {
  // ...
}

async function administratorProductID() {
  // ...
}

async function administratorProductsCreate() {
  var image = {
    ID: Math.floor(Math.random() * 1000000000),
    url: "https://images.unsplash.com/photo-1523878288860-7ad281611901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  };

  var productImage = new ProductImage(image);

  await productImage.save();

  var product = {
    ID: Math.floor(Math.random() * 1000000000),
    name: "Havaianas",
    images: [], // array of product image schema
    description: "Description here",
    price: 999,
    quantity: 30,
    category: "slippers",
  };

  product["images"].push(image["ID"]);

  // update product
  product = new Product(product);
  await product.save();
  console.log("OK");
}

async function administratorProductIDEditGet() {
  // ...
}

async function administratorProductIDEditPost() {
  // ...
}

module.exports = {
  administratorProducts,
  administratorProductID,
  administratorProductsCreate,
  administratorProductIDEditGet,
  administratorProductIDEditPost,
};

// below this line is a temporary file
// ...
// TESTING
// npm run code
administratorProductsCreate();
