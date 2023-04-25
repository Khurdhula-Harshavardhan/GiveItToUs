const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  seller:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    enum: ['New', 'Used', 'Used fair'],
    required: true
  },
  choice: {
    type: String,
    enum: ['sell', 'giveaway'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  },
  images: [
    {
      filename: { type: String, required: true },
      originalname: { type: String, required: true },
      contentType: { type: String, required: true },
      size: { type: Number, required: true },
      data: { type: Buffer, required: true }
    }
  ]
});

module.exports = mongoose.model('Product', productSchema);
