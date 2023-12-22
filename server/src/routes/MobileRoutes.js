const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Mobile = require('../models/Mobiles');
const phones_array = require('../MOCK_DATA.json')

router.get('/phones',(req,res) => {
  return Mobile.find()
  .then(phones => res.json(phones))
  .catch(err => res.json(err))
});

router.get('/phones/:id', (req, res) => {
  const id = req.params.id;

  Mobile.find({id:id})
    .then(phone => {
      if (!phone) {
        return res.status(404).json({ error: 'Phone not found' });
      }
      res.json(phone);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;