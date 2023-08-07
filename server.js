const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is up and running 🔥');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log`Server is running on port ${port}`;
});
