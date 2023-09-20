const express = require('express');
const router = express.Router();

const Food = require('../models/foodModel');

router.get('/getallfoods', async (req, res) => {
  try {
    const foods = await Food.find({});
    res.send(foods);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// Add food routes

router.post('/addfood', async (req, res) => {
  const food = req.body.food;

  try {
    const newFood = new Food({
      name: food.name,
      image: food.image,
      varients: ['small', 'medium', 'large'],
      description: food.description,
      category: food.category,
      prices: [food.prices],
    });
    await newFood.save();
    res.send('New food added successfully');
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
