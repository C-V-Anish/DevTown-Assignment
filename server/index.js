const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 6001;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mobiles');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const mobileRoutes = require('./src/routes/MobileRoutes');
app.use('/api/mobiles', mobileRoutes);

