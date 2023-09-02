const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', (req, res) => {
  // Handle register
  const { name, email, password } = req.body;
  const newUser = new User({
    name,
    email,
    password,
  });

  try {
    newUser.save();
    res.send('User registered successfully');
  } catch (error) {
    return res.status(400).send('Error while registering user');
  }
});

module.exports = router;
