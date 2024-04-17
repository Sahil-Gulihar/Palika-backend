const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const Carousel = mongoose.model('Carousel', carouselSchema);

module.exports = Carousel;
