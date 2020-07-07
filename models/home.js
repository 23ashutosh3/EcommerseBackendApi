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
