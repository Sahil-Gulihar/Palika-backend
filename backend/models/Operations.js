import Carousel from "./Carousel";
import Category from "./Categories";
import Coupon from "./Coupons";
import connectDatabase from "../config/database";

export const createCarousel = async (carouselData) => {
    await connectDatabase();
    const newCarousel = new Carousel(carouselData);
    await newCarousel.save();
  };
  
  export const createCategory = async (categoryData) => {
    await connectDatabase();
    const newCategory = new Category(categoryData);
    await newCategory.save();
  };
  
  export const createCoupon = async (couponData) => {
    await connectDatabase();
    const newCoupon = new Coupon(couponData);
    await newCoupon.save();
  };