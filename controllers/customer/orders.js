// libraries
var express = require("express");

var Orders = require("../../models/orders");

async function getOrders(req, res) {
  var orders = await Orders.find({});
  res.json(orders);
}

async function orders(req, res) {
  var orders = new Orders(req.body);
  await orders.save();
  res.json({ message: "OK" });
}

module.exports = {
  orders,
  getOrders,
};
