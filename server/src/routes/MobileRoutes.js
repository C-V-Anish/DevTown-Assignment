const express = require('express');
const router = express.Router();
const Mobile = require('../models/Mobiles');

router.get('/', async (req, res) => {
  try {
    const filters = req.query;
    const mobiles = await Mobile.find(filters);
    res.json(mobiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;