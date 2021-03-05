const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const portfolioSchema = new Schema(


  {
    imgLoc: {
        type: String,
        trim: true,
        required: [true,'Enter image location (url or file in images directory']
      },
    title: {
      type: String,
      trim: true,
      required: [true,'Enter a title']
    },
    description: {
      type: String,
      required: [true,'Enter a Description']
    },    
    gitBtn: {
        type: String,
        required: [true,'Enter a url for repository']
      },
    deployBtn:{
      type: String
    }
  }
);

const Portfolio  = mongoose.model("portfolio", portfolioSchema);

module.exports = Portfolio;
