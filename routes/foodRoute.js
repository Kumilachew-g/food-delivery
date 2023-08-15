const express = require('express');
const router = express.Router();

const food = require('../models/foodModel');

router.get('/', async (req, res) => {
  try {
    const food = await food.find();
    res.send(food);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
