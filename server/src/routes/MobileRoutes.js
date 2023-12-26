const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Mobile = require("../models/Mobiles");
const phones_array = require("../MOCK_DATA.json");

router.get("/phones", (req, res) => {
  return Mobile.find()
    .then((phones) => {const phoneNames = phones.map(phone => phone["brand"] + " " + phone["model"]);
    // console.log(phoneNames)
    res.json({ phones: phoneNames });})
    .catch((err) => res.json(err));
});

router.get("/phones/:brand", (req, res) => {
  const brand = req.params.brand;

  Mobile.find({brand:brand})
    .then((phones) => {
      if (!phones || phones.length === 0) {
        return res.status(404).json({ error: "Phone not found" });
      }
      const phoneNames = phones.map(phone => phone["brand"] + " " + phone["model"]);
      // console.log(phoneNames)
      res.json({ phones: phoneNames });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
