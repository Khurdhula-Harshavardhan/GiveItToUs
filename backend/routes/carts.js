const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');

router.post('/addToCart', async (req, res) => {
  const { username, productId } = req.body;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    let cart = await Cart.findOne({ username });
    if (!cart) {
      cart = await new Cart({ username, products: [productId] }).save();
      return res.status(201).json({ message: 'Product added to cart', cart });
    }
    if (cart.products.includes(productId)) {
      return res.status(409).json({ message: 'Product already in cart' });
    }
    cart.products.push(productId);
    await cart.save();
    res.status(200).json({ message: 'Product added to cart', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/dropFromCart/:username/:productId', async (req, res) => {
    const { username, productId } = req.params;
    try {
      let cart = await Cart.findOne({ username });
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
      if (!cart.products.includes(productId)) {
        return res.status(404).json({ message: 'Product not found in cart' });
      }
      cart.products.pull(productId);
      await cart.save();
      res.status(200).json({ message: 'Product dropped from cart', cart });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

router.get('/getAllItemsInCart/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const cart = await Cart.findOne({ username });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    const productIds = cart.products;
    const products = await Product.find({ _id: { $in: productIds } });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
