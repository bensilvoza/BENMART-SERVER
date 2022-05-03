// libraries
var express = require("express");

var Product = require("../../models/product");

async function products(req, res) {
  var products = await Product.find({});
  res.json(products);
}

async function product(req, res) {
  var productID = req.params.ID;
  var dbResponse = await Product.findOne({ ID: productID });
  res.json(dbResponse);
}

module.exports = {
  products,
  product,
};
