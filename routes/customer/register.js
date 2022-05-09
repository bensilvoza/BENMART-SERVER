// libraries
var express = require("express");
var router = express.Router();

// controllers
var {
  register,
  registerUpdate,
} = require("../../controllers/customer/register");

router.post("/register", register);

// edit address
router.post("/register/edit", registerUpdate);

module.exports = router;
