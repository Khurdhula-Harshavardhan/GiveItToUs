
const mongoose = require('mongoose');
/*firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    dob: "",
    gender: "",
    username: "",
    password: "",
    confirmPassword: "", */
const BuyerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob:{
    type: Date,
    required: true
  }

});

module.exports = mongoose.model('Buyer', BuyerSchema);
