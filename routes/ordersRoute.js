const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const stripe = require('stripe')(
  'sk_test_51NneHgKlJn4JJiGpvVyA8mgU5tIsg8pEM8lcTQwASnfCCzg4P6QI87qzPMr9vk9bqZV03drBYR5mXUu4IHS2JCNs00zrOkY7oc'
);

// add orders controller
router.post('/placeorder', async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
      },
      { idempotencyKey: uuidv4() }
    );
    if (payment) {
      res.send('Payment Success');
    } else {
      res.send('Payment Failed');
    }
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
