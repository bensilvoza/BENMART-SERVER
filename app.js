// libraries
var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

// require routes
var customerHome = require("./routes/customer/home");
var customerProducts = require("./routes/customer/products");
var customerRegister = require("./routes/customer/register");
var customerLogin = require("./routes/customer/login");
var orders = require("./routes/customer/orders");
var payment = require("./routes/customer/payment");

// admin routes
var administratorProducts = require("./routes/administrator/products");

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
app.use(customerHome);
app.use(customerProducts);
app.use(customerRegister);
app.use(customerLogin);
app.use(orders);
app.use(payment);
// admin
app.use(administratorProducts);

// port
app.listen(process.env.PORT || 5000, function () {
  console.log("server is now running");
  console.log(".");
  console.log(".");
  console.log(".");
});
