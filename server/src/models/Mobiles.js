const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  processor: { type: String, required: true },
  memory: { type: String, required: true },
  os: { type: String, required: true },
});

const Mobile = mongoose.model('Mobile', mobileSchema);

module.exports = Mobile;