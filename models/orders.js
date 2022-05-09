var mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
  ID: Number,
  productName: String,
  price: Number,
  quantity: Number,
  total: Number,
});

// orders
// this will only happen on checkout and going forward
var ordersSchema = new mongoose.Schema({
  ID: Number,
  customerID: Number, // have a relationship in customer schema
  orders: [orderSchema], // array of order schema
  total: Number,
  paymentMethod: String,
  paid: Boolean,
});

var Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
