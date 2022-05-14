var mongoose = require("mongoose");

// order
var orderSchema = new mongoose.Schema({
  ID: Number,
  productName: String,
  price: Number,
  quantity: Number,
  total: Number,
});

// address
var addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  region: String,
  country: String,
});

// orders
var ordersSchema = new mongoose.Schema({
  ID: Number,
  customerID: Number, // have a relationship in customer schema
  orders: [orderSchema], // array of order schema
  address: addressSchema,
  total: Number,
  paymentMethod: String,
  paid: Boolean,
});

var Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
