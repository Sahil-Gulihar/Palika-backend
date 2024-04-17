const express = require('express');
const connectDatabase = require('../backend/config/database');
const { createCarousel, createCategory, createCoupon } = require('./models/Operations');

const app = express();

// Connect to the database
connectDatabase();

// Function to create sample data
const createSampleData = async () => {
  const carouselData = {
    name: 'Carousel Item 1',
    img: 'https://example.com/carousel-image.jpg',
    link: 'https://example.com/carousel-link',
  };

  const categoryData = {
    img: 'https://example.com/category-image.jpg',
    link: 'https://example.com/category-link',
    alt: 'Category Name',
    redirectLink: 'https://example.com/category-redirect',
  };

  const couponData = {
    title: 'Coupon Title',
    successRate: 90,
    img: 'https://example.com/coupon-image.jpg',
  };

  await createCarousel(carouselData);
  await createCategory(categoryData);
  await createCoupon(couponData);
};

// Call the function to create sample data
createSampleData().then(() => {
  console.log('Sample data created successfully');
}).catch(err => {
  console.error('Error creating sample data:', err);
});

// Route to get carousel data
app.get('/carousel', async (req, res) => {
  try {
    const carouselItems = await Carousel.find();
    res.json(carouselItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get category data
app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get coupon data
app.get('/coupons', async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/coupons',)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
