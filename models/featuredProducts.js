var mongoose = require("mongoose");

// featured products
var featuredProductsSchema = new mongoose.Schema({
  ID: Number,
  url: String,
  productID: Number, // have a relationship in product schema
});
var FeaturedProducts = mongoose.model(
  "FeaturedProducts",
  featuredProductsSchema
);

module.exports = FeaturedProducts;
