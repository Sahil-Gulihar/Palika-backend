require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const connectDatabase = require("../backend/config/database");
const Carousel = require("./models/Carousel");

const app = express();

app.use(express.json());

// Connect to the database
connectDatabase();
// const connectDb = async () => {
//   try {
//       await mongoose.connect("mongodb://localhost:27017/nigga");
//       console.log("MongoDB database connected");

//   } catch (err) {
//       console.error("Error connecting to database:", err);
//       throw err;
//   }
// }
// connectDb();

// Route to get carousel data
app.get("/carousel", async (req, res) => {
  try {
    const carouselItems = await Carousel.find();
    res.json(carouselItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get category data
app.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get coupon data
app.get("/coupons", async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/coupons", async (req, res) => {
  try {
    // Parse incoming data from request body
    const {
      img,
      headerTxt,
      bodyTxt,
      discountInPersent,
      discountAmt,
      minDiscount,
      maxDiscount,
      minOrderAmt,
      maxOrderAmt,
      currency,
    } = req.body;

    // Create new coupon object
    const newCoupon = new Coupon({
      img,
      headerTxt,
      bodyTxt,
      discountInPersent,
      discountAmt,
      minDiscount,
      maxDiscount,
      minOrderAmt,
      maxOrderAmt,
      currency,
    });

    // Save the new coupon to the database
    await newCoupon.save();

    res
      .status(201)
      .json({ message: "Coupon added successfully", coupon: newCoupon });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/carousel", async (req, res) => {
  try {
    // Parse incoming data from request body
    const {
      img,
      headerTxt,
      bodyTxt,
      discountInPersent,
      discountAmt,
      minDiscount,
      maxDiscount,
      minOrderAmt,
      maxOrderAmt,
      currency,
    } = req.body;

    // Create new carousel item object
    const newCarouselItem = new Carousel({
      img,
      headerTxt,
      bodyTxt,
      discountInPersent,
      discountAmt,
      minDiscount,
      maxDiscount,
      minOrderAmt,
      maxOrderAmt,
      currency,
    });

    // Save the new carousel item to the database
    await newCarouselItem.save();

    res.status(201).json({
      message: "Carousel item added successfully",
      carouselItem: newCarouselItem,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/categories", async (req, res) => {
  try {
    // Parse incoming data from request body
    const {
      img,
      headerTxt,
      bodyTxt,
      discountInPersent,
      discountAmt,
      minDiscount,
      maxDiscount,
      minOrderAmt,
      maxOrderAmt,
      currency,
    } = req.body;

    // Create new category object
    const newCategory = new Category({
      img,
      headerTxt,
      bodyTxt,
      discountInPersent,
      discountAmt,
      minDiscount,
      maxDiscount,
      minOrderAmt,
      maxOrderAmt,
      currency,
    });

    // Save the new category to the database
    await newCategory.save();

    res
      .status(201)
      .json({ message: "Category added successfully", category: newCategory });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
