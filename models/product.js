var mongoose = require("mongoose");

var productImageSchema = new mongoose.Schema({
  ID: Number,
  url: String,
  filename: String,
});

// product
var productSchema = new mongoose.Schema({
  ID: Number,
  name: String,
  images: [{ ID: Number, url: String, filename: String }], //another option is to use ---> images: [productImageSchema]
  description: String,
  price: Number,
  quantity: Number,
  category: String,
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
