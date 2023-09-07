import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function handleToken(token, addresses) {
  console.log({ token, addresses });
}

function Checkout({ subtotal }) {
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
