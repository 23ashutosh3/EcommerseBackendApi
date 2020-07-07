//routes for homepage,any user can visit home page.no authentication is required for home page.

const express = require("express");

const router = express.Router();
const homeController = require("../../../controllers/api/v1/home.js");



router.get("/", homeController.allProduct);
router.post("/addProduct",homeController.addProduct);
router.delete("/:id/delete", homeController.deleteProduct);

//redirect to user
router.use("/user", require("./user"));

//redirect to cart
router.use("/addCart", require("./addCart"));



module.exports = router;
