const express = require('express');
const router = express.Router();

const food = require('../models/foodModel');

router.get('/getallfoods', async (req, res) => {
  try {
    const foods = await food.find({});
    res.send(foods);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
