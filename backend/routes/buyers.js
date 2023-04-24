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

//insert the new buyer information into the database.
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

//Check if the username is already present within our collection.
router.get('/check-username/:username', async (req, res) => {
    try {
      const { username } = req.params;
      const buyer = await Buyer.findOne({ username });
  
      if (buyer) {
        res.status(200).json({ exists: true });
      } else {
        res.status(200).json({ exists: false });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
