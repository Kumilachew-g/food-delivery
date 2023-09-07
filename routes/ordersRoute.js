const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const stripe = require('stripe')(
  'sk_test_51NneHgKlJn4JJiGpvVyA8mgU5tIsg8pEM8lcTQwASnfCCzg4P6QI87qzPMr9vk9bqZV03drBYR5mXUu4IHS2JCNs00zrOkY7oc'
);

// add orders controller
router.post('/placeorder', (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;

  try {
    const customer = stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
      },
      { idempotencyKey: uuidv4() }
    );
  } catch (error) {}
});

module.exports = router;
