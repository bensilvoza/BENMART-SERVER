var mongoose = require("mongoose");

// product
var productSchema = new mongoose.Schema({
  ID: Number,
  name: String,
  images: [], // array of product image schema
  description: String,
  price: Number,
  quantity: Number,
  category: String,
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
