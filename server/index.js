const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
const PORT = process.env.PORT || 6001;

mongoose.connect('mongodb://localhost:27017/mobiles');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(PORT,() => console.log(`Server running on Port ${PORT}`))

const mobileRoutes = require('./src/routes/MobileRoutes');
app.use('/api', mobileRoutes);

