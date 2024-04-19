const connectDatabase = require("../config/database");
const Carousel = require("./Carousel");
const Category = require("./Categories");
const Coupon = require("./Coupons");

exports.createCarousel = async (carouselData) => {
    await connectDatabase();
    const newCarousel = new Carousel(carouselData);
    await newCarousel.save();
};

exports.createCategory = async (categoryData) => {
    await connectDatabase();
    const newCategory = new Category(categoryData);
    await newCategory.save();
};

exports.createCoupon = async (couponData) => {
    await connectDatabase();
    const newCoupon = new Coupon(couponData);
    await newCoupon.save();
};
