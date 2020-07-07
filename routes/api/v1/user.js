const express = require("express");

const router = express.Router();
const usersController = require("../../../controllers/api/v1/users.js");
const passportLocal = require("../../../config/passport_jwt_strategy");

router.post("/login", usersController.login);
router.post("/register", usersController.register);

module.exports = router;
