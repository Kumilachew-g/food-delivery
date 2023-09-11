const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')(
  'sk_test_51NneHgKlJn4JJiGpvVyA8mgU5tIsg8pEM8lcTQwASnfCCzg4P6QI87qzPMr9vk9bqZV03drBYR5mXUu4IHS2JCNs00zrOkY7oc'
);
const Order = require('../models/orderModel');

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
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pinCode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      newOrder.save();

      res.send('Order placed successfully');
    } else {
      res.send('Payment Failed');
    }
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong' });
  }
});

router.get('/getuserorders', async (req, res) => {
  const { userId } = req.body;
  try {
    const order = await Order.find({
      userId: userId,
    });
    res.send(order);
  } catch (error) {
    res.status(404).json({ message: 'Something went wrong' });
  }
});

module.exports = router;
