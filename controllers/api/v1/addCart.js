const User = require("../../../models/cart");
const Home = require("../../../models/home");


module.exports.addInCart = async function (req, res) {
  try {
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

        const added = await Home.findById(req.params.id);

        let newproduct = await User.create({
          productdetails: req.params.id,
          quantity: req.body.quantity,
          // votes:0

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
  } catch (err) {
    return res.json(500, {
      message: "internal server error",
    });
  }
};