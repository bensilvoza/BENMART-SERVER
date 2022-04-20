var mongoose = require("mongoose");

// product image
var productImageSchema = new mongoose.Schema({
  ID: Number,
  url: String,
});
var ProductImage = mongoose.model("ProductImage", productImageSchema);

module.exports = ProductImage;
