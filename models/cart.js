//schema for user cart.user can add product in his cart from home page of a ecommerse 

const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productdetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cart',
    },
    quantity:
    {
        type:Number,
        default:0.
    }
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
