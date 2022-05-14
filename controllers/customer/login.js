// libraries
var express = require("express");
var Customer = require("../../models/customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    // create authorization token
    var jwtSecretKey = process.env.JWT_SECRET_KEY;
    jwt.sign({ ID: customer["ID"] }, jwtSecretKey, (error, token) => {
      res.json({
        token: token,
        customer: customer,
      });
    });
  } else {
    // Incorrect credentials
    res.json({ message: "ERROR" });
  }
}

module.exports = {
  login,
};
