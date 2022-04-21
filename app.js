// libraries
var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

// require routes
// var index = require("./routes/index");
// var administratorHome = require("./routes/administrator/home");
var administratorProducts = require("./routes/administrator/products");
// var administratorOrders = require("./routes/administrator/orders");
// var administratorAccount = require("./routes/administrator/account");
// var customerHome = require("./routes/customer/home");

// env
var dbUrl = process.env.DB_URL;

// use
var app = express();
app.use(express.json());
app.use(cors());

// Databse
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
var connection = mongoose.connection;
connection.once("open", function () {
  // console.log("Database is now connected");
});

// routes
//app.use(index);
app.use(administratorProducts);

// port
app.listen(process.env.PORT || 5000, function () {
  console.log("Backend server is running.");
  console.log(".");
  console.log(".");
  console.log(".");
  console.log(".");
  console.log(".");
});
