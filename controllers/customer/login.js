// libraries
var express = require("express");
var Customer = require("../../models/customer");
const bcrypt = require("bcrypt");

async function login(req, res) {
  var plainPassword = req.body.password;
  // hashpassword is from my database
  var hashPassword = undefined;

  var customer = await Customer.findOne({ email: req.body.email });
  if (customer === null) {
    // Incorrect credentials
    return res.json({ message: "ERROR" });
  }

  // update value of hashPassword
  hashPassword = customer["password"];

  const match = await bcrypt.compare(plainPassword, hashPassword);

  if (match) {
    // login
    res.json(customer);
  } else {
    // Incorrect credentials
    res.json({ message: "ERROR" });
  }
}

module.exports = {
  login,
};
