var paypal = require("paypal-rest-sdk");

function payment(req, res) {
  var createPaymentJSON = req.body.createPaymentJSON;
  var paymentMethod = req.body.paymentMethod;

  // ======
  // paypal
  // ======
  if (paymentMethod === "paypal") {
    // configure
    paypal.configure({
      mode: "sandbox",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    });

    // create
    paypal.payment.create(createPaymentJSON, function (error, payment) {
      if (error) {
        throw error;
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === "approval_url") {
            res.redirect(payment.links[i].href);
          }
        }
      }
    });
  } // end, if statement
}

module.exports = {
  payment,
};
