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

// Add food routes

router.post('/addfood', async (req, res) => {
  const food = req.body.food;

  try {
    const newFood = new food({
      name: food.name,
      image: food.image,
      varient: ['small', 'medium', 'large'],
      description: food.description,
      category: food.category,
      price: [food.prices],
    });
    await newFood.save();
    res.send('New food added successfully');
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
