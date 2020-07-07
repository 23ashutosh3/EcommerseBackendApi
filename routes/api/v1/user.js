const express = require("express");

//user can login and register himself

const router = express.Router();
const usersController = require("../../../controllers/api/v1/users.js");

router.post("/login", usersController.login);
router.post("/register", usersController.register);

module.exports = router;
