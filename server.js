const express = require('express');

const food = require('./models/foodModel');

const app = express();
const db = require('./db');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is up and running 🔥');
});

app.get('/api/foods', (req, res) => {
  food.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log`Server is running on port ${port}`;
});
