const express = require("express");

const router = express.Router();
const homeController = require("../../../controllers/api/v1/home.js");

router.get("/", homeController.allProduct);
router.post("/addProduct",homeController.addProduct)


router.use("/user", require("./user"));
router.use("/addCart", require("./addCart"));



module.exports = router;
