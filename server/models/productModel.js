const mongoose = require('mongoose');

const { Schema } = mongoose;

const productModel = new Schema({
  name: {
    type: String,
    required: [true, 'The name is required'],
  },
  description: {
    type: String,
    required: [true, 'The description is required'],
  },
  price: {
    type: Number,
    required: [true, 'The price is required'],
  },
  image: {
    type: String,
    required: [true, 'The image is required'],
  },
  category: {
    type: String,
    required: [true, 'The category is required'],
  },
});
module.exports = mongoose.model('Product', productModel);
