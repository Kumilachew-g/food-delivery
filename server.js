const express = require('express');

const food = require('./models/foodModel');
const { connectToDB, getDB } = require('./db');

// Init app & middleware
const app = express();

// DB Connection
let DBC;

connectToDB((err) => {
  if (!err) {
    app.listen(5000, () => {
      console.log('App listening on port 5000!');
    });
    DBC = getDB();
  }
});
// const db = require('./db');
// app.use(express.json());

//   routes
app.get('/foods', (req, res) => {
  let foods = [];
  DBC.collection('foods')
    .find()
    .sort({ name: 1 })
    .forEach((food) => foods.push(book))
    .then(() => {
      res.status(200).json(foods);
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not fetch the food' });
    });
});
