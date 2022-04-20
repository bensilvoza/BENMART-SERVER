var mongoose = require("mongoose");

// orders
var ordersSchema = new mongoose.Schema({
  ID: Number,
  customer_ID: Number, // have a relationship in customer schema
  customer_address_ID: Number,
  orders: [], // array of order schema
  total: Number,
  paymentMethod: String,
  paid: Boolean,
});

var Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
