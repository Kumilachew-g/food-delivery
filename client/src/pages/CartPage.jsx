import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
function CartPage() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h2 style={{ fontSize: '30px' }}>My Cart</h2>

          {cartItems.map((item) => {
            return (
              <div className='flex-container'>
                <div>
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price:{item.price}*{item.prices[0][item.varient]}=
                    {item.price}
                  </h1>
                  <h1>Quantity: </h1>
                  <i class='fa-solid fa-plus'></i>
                  <b>{item.quantity}</b>
                  <i class='fa-solid fa-minus'></i>
                </div>
                <div></div>
                <div></div>
              </div>
            );
          })}
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  );
}

export default CartPage;
