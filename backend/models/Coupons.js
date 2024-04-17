const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  successRate: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  // Add any other fields you need for your coupons
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
