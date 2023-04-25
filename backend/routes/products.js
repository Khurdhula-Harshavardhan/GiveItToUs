const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const Product = require('../models/Product');

// Set up the storage location for uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Define the file type that can be uploaded
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG and PNG files are allowed'), false);
  }
};

// Set up the multer instance to handle file uploads
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB file size limit
  fileFilter: fileFilter
});

// Handle GET requests to retrieve all products
router.get('/get-products', async (req, res) => {
  try {
    const products = await Product.find({ available: true });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Handle POST requests to add a new product
router.post('/sell', upload.array('images', 6), async (req, res) => {
  try {
    const { name, seller, description, category, condition, choice, price, available } = req.body;
    const images = req.files.map(file => file.filename); // Get the filenames of uploaded images
    const product = new Product({ name, seller, description, category, condition, choice, price, available, images });
    const newProduct = await product.save();
    res.status(201).json(newProduct);
    console.log("New product posted successfully!");
  } catch (err) {
    // Delete any uploaded images if an error occurs
    req.files.forEach(file => {
      const filePath = path.join(__dirname, '..', 'uploads', file.filename);
      fs.unlink(filePath, (err) => {
        if (err) console.error(err);
      });
    });
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
