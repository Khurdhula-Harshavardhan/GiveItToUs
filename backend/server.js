// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const buyersRouter = require('./routes/buyers');
const productsRouter = require('./routes/products')
const app = express();
app.use(express.json());
app.use(cors());

credentials = "./X509-cert-6415171768107886158.pem"

mongoose.connect(process.env.MONGODB_URI, {
    sslKey: credentials,
    sslCert: credentials,
  });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

app.use('/api/buyers', buyersRouter);
app.use('/api/products', productsRouter);
app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
