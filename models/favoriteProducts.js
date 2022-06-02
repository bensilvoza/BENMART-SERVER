var mongoose = require("mongoose");

// order
var productIDSchema = new mongoose.Schema({
  productID: Number,
});

// product
var favoriteProductsSchema = new mongoose.Schema({
  favoriteProducts: [productIDSchema], // array of productIDSchema
  customerEmail: String,
});

var FavoriteProducts = mongoose.model(
  "FavoriteProducts",
  favoriteProductsSchema
);

module.exports = FavoriteProducts;
