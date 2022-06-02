// libraries
var express = require("express");

var FavoriteProducts = require("../../models/favoriteProducts");

async function favoriteProducts(req, res) {
  var fav;
  var customerEmail = req.body.customerEmail;
  var faveProductID = { productID: req.body.productID };

  var dbresponse = await FavoriteProducts.findOne({
    customerEmail: customerEmail,
  });

  if (dbresponse == null) {
    // new item
    fav = new FavoriteProducts({
      customerEmail: customerEmail,
      favoriteProducts: [faveProductID],
    });
  } else {
    // existing item
    fav = dbresponse;
    fav.favoriteProducts.push(faveProductID);
  }

  await fav.save();
  res.json("OK");
}

module.exports = {
  favoriteProducts,
};
