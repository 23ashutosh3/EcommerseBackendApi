const Home = require("../../../models/home");


module.exports.addProduct = async function (req, res) {
  try {
    if (!req.body.product) {
      return res.json(400, {
        message: "product can not empty",
      });
    }

     const Hproduct = await Home.findOne({ product: req.body.product });

   

    const homeProduct = await Home.create({
      product: req.body.product,
      category:req.body.category,
      price:req.body.price
    });


    homeProduct.link_to_addCart = `http://localhost:8000/addCart/${homeProduct._id}/addInCart `;
    homeProduct.save();
    // question.options.push(newOpt);

    return res.json(200, {
      message: "product created",
      Hproduct: homeProduct,
    });
  } catch (err) {
    return res.json(500, {
      message: "internal error",
    });
  }
};


module.exports.allProduct = (req, res) => {
  Home.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured",
      });
    });
};