// libraries
var express = require("express");
var Customer = require("../../models/customer");
const bcrypt = require("bcrypt");

function register(req, res) {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
    // if there's potential error
    if (err) {
      res.json({ message: "ERROR" });
    }

    // Store hash in your password DB.
    var customer = new Customer(req.body);
    customer["password"] = hash;
    await customer.save();

    // send response to client
    res.json({ message: "OK" });
  });
}

async function registerUpdate(req, res) {
  await Customer.findOneAndUpdate({ ID: req.body.ID }, req.body);
  res.json({ message: "OK" });
}

module.exports = {
  register,
  registerUpdate,
};
