function payment() {
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

    // obj
    var create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url:
          "https://sheltered-cliffs-00802.herokuapp.com/payment/success",
        cancel_url: "https://sheltered-cliffs-00802.herokuapp.com/payment",
      },
      transactions: [{ amount: { currency: "PHP", total: total } }],
    };

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
