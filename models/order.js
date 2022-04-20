var mongoose = require("mongoose");

// order
var orderSchema = new mongoose.Schema({
  ID: Number,
  productName: String,
  price: Number,
  quantity: Number,
  total: Number,
});

var Order = mongoose.model("Order", orderSchema);

module.exports = Order;
