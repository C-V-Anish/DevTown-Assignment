const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  type: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  processor: { type: String, required: true },
  ram: { type: String, required: true },
  internal_memory: { type: String, required: true },
  os: { type: String, required: true },
  price: { type: Number, required: true },
});

const Mobile = mongoose.model('Mobile', mobileSchema);

module.exports = Mobile;