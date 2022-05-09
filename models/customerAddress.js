var mongoose = require("mongoose");

// customer address
var customerAddressSchema = new mongoose.Schema({
  ID: Number,
  street: String,
  city: String,
  region: String,
  country: String,
});
var CustomerAddress = mongoose.model("CustomerAddress", customerAddressSchema);

module.exports = CustomerAddress;
