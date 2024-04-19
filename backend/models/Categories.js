const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  headerTxt: {
    type: String,
    default: "",
  },
  bodyTxt: {
    type: String,
    default: "",
  },
  discountInPersent: {
    type: Number,
    default: null,
  },
  discountAmt: {
    type: Number,
    default: null,
  },
  minDiscount: {
    type: Number,
    default: null,
  },
  maxDiscount: {
    type: Number,
    default: null,
  },
  minOrderAmt: {
    type: Number,
    default: null,
  },
  maxOrderAmt: {
    type: Number,
    default: null,
  },
  currency: {
    type: String,
    default: "",
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
