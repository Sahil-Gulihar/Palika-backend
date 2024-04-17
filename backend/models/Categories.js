const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  redirectLink: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
