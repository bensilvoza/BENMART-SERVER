// libraries
var express = require("express");

var FavoriteProducts = require("../../models/favoriteProducts");

async function favoriteProductsList(req, res) {
  // Retrieve the GET query string parameters using Express
  var email = req.query.email;

  var dbresponse = await FavoriteProducts.findOne({
    customerEmail: email,
  });

  if (dbresponse == null) {
    res.json([]);
  } else {
    res.json(dbresponse.favoriteProducts);
  }
}

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
    // no fave productsID must be the same
    fav = dbresponse;

    for (var i = 0; i < fav.favoriteProducts.length; i++) {
      if (fav.favoriteProducts[i]["productID"] == req.body.productID) {
        // remove
        fav.favoriteProducts.splice(i, 1);
        await fav.save();
        res.json("OK");
        return;
      }
    }

    // insert
    fav.favoriteProducts.push(faveProductID);
  }

  await fav.save();
  res.json("OK");
}

module.exports = {
  favoriteProductsList,
  favoriteProducts,
};
