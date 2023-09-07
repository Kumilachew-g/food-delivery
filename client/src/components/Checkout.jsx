import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../redux/actions/orderActions';

function Checkout({ subtotal }) {
  const dispatch = useDispatch();
  function handleToken(token) {
    console.log({ token });
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={handleToken}
        stripeKey='pk_test_51NneHgKlJn4JJiGpID4zcqvjQ8gkoDNybYJzUsTN3urnlwkTChPhIgpUlqNK6FvBQKpQx4FPbrGgQ0dKJuwVKp6S00bBL1JEtM'
        currency='USD'
      >
        <button className='btn'>Pay Now</button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
