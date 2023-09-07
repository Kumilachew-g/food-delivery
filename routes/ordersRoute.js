// import express
const express = require('express');

// import express router
const router = express.Router();

// import stripe
const stripe = require('stripe')(
  'sk_test_51NneHgKlJn4JJiGpvVyA8mgU5tIsg8pEM8lcTQwASnfCCzg4P6QI87qzPMr9vk9bqZV03drBYR5mXUu4IHS2JCNs00zrOkY7oc'
);

// add orders controller
router.post('/placeorder', (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
});

// export router
module.exports = router;
