const Home = require("../../../models/home");

// add product to homepage
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

//link to redirect to the cart,if we want to add this product into our cart
    homeProduct.link_to_addCart = `http://localhost:8000/addCart/${homeProduct._id}/addInCart `;
    homeProduct.save();

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

//get all product  which are available into home
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

//delete the question 
module.exports.deleteProduct = async function (req, res) {
  try {
    const prod = await Home.findById(req.params.id)
    if (!prod) {
      return res.json(400, {
        message: "product not found"
      });
    }

    prod.remove();

    return res.json(200, {
      message: "product deleted"
    })

  }
  catch (err) {
    res.json(500, {
      message: "internal error"
    })
  }
}