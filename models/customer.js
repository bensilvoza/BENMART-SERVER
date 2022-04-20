var mongoose = require("mongoose");

// customer
var customerSchema = new mongoose.Schema({
  ID: Number,
  firstname: String,
  lastname: String,
  email: String,
  mobileNumber: Number,
  password: String,
  addressID: Number, // have a relationship in address schema
});
var Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
