// libraries
var express = require("express");

var Product = require("../../models/product");

async function home(req, res) {
  var products = await Product.find({});
  res.json(products);
}

module.exports = {
  home,
};
