const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');

// Buy Now Route
router.post('/buynow', async (req, res) => {
  const { username, productId } = req.body;
  try {
    // Update product's available flag to false
    const product = await Product.findByIdAndUpdate(productId, { available: false }, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Create new order
    const order = new Order({ username, productId });
    await order.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get Orders Route
router.get('/getorders/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const orders = await Order.find({ username }).populate('productId');
    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
