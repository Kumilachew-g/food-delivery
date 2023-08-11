const express = require('express');

const food = require('./models/foodModel');

const app = express();
const db = require('./db');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is up and running 🔥');
});

// app.get('/api/foods', async (req, res) => {
//   await food
//     .find({})
//     .then((foods) => {
//       res.send(foods);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get('/foods', async (req, res) => {
  try {
    const foods = await food.find({});
    res.send(foods);
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log`Server is running on port ${port}`;
});
