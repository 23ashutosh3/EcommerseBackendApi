//home page for ecommerse ,it shows all the product available in home 

const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
   

    product: {
      type: String,
      required: true,
    },

    category:
    {
        type:String,
        require:true
    },

    price: {
        type:Number,
        require:true
    },
// added a link in home schema ,if user want to add this product this link help 
//him to redirect into cart schema
    link_to_addCart:
    {
      type:String
    }

  
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.model("home", homeSchema);

module.exports = Home;
