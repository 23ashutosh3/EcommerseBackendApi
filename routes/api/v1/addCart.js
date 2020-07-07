const express = require("express");

const router = express.Router();
const usersController = require("../../../controllers/api/v1/addCart.js");
const passport = require('passport');
router.post("/:id/addInCart", passport.authenticate("jwt", { session: false }), usersController.addInCart);
// router.post("/register", usersController.register);

module.exports = router;
