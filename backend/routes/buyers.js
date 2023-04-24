/*
firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    dob: "",
    gender: "",
    username: "",
    password: "",
    confirmPassword: "",
*/
const express = require('express');
const router = express.Router();
const Buyer = require('../models/Buyer');

router.post('/register', async (req, res) => {
  try {
    const { firstname, lastname, email, phone, address, dob, gender, username, password } = req.body;
    const buyer = new Buyer({ firstname, lastname, email, phone, address, dob, gender, username, password });

    await buyer.save();
    res.status(201).json({ message: 'Buyer registered successfully!' });
    console.log("Buyer information stored successfully.");
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("Failed to store new user data.");
  }
});

// Add other routes as needed

module.exports = router;
