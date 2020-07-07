const User = require("../../../models/cart");
const Home = require("../../../models/home");



//for adding product to login user cart
module.exports.addInCart = async function (req, res) {
  try {
    //if cart schema already have this product its simply increase the quantity
     const add = await User.findById(req.params.id);

      if (add) {
         let curr = User.quantity;
         User.quantity = curr + 1;

         await User.save();

        return res.json(200, {
          data:
          {
            productdetails: add,
            quantity:User.quantity,
          },
          message: "product added ",

        });
    }

    else {
//it simply store the product to cart by default quantity is ,you can change the quantity
        const added = await Home.findById(req.params.id);

        let newproduct = await User.create({
          productdetails: req.params.id,
          quantity: req.body.quantity,
          

        })

        newproduct.save();
        return res.json(200, {
          data:
          {
            productdetails: newproduct,
            
          },
          message: "new product added in cart",

        });

    }
    //if error simply return 500
  } catch (err) {
    return res.json(500, {
      message: "internal server error",
    });
  }
};