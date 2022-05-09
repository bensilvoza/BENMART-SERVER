var mongoose = require("mongoose");

// address
var addressSchema = new mongoose.Schema({
  ID: Number,
  street: String,
  city: String,
  region: String,
  country: String,
});

// customer
var customerSchema = new mongoose.Schema({
  ID: Number,
  firstname: String,
  lastname: String,
  email: String,
  mobileNumber: Number,
  password: String,
  address: {
    ID: Number,
    street: String,
    city: String,
    region: String,
    country: String,
  }, //another option is to use ---> address: [addressSchema]
});
var Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
