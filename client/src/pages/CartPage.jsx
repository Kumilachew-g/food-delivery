import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
function CartPage() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h2 style={{ fontSize: '30px' }}>My Cart</h2>

          {cartItems.map((item) => {
            return (
              <div className='flex-container'>
                <div className='text-start m-1 w-100'>
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price:{item.price}*{item.prices[0][item.varient]}=
                    {item.price}
                  </h1>
                  <h1 style={{ display: 'inline' }}>Quantity: </h1>
                  <i
                    className='fa-solid fa-plus'
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className='fa-solid fa-minus'
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  ></i>
                  <hr />
                </div>
                <div className='m-1 w-100'>
                  <img
                    src={item.image}
                    style={{ height: '80px', width: '80px' }}
                    alt=''
                  />
                </div>
                <div className='m-1 w-100'>
                  <i className='mt-5 fa-solid fa-trash'></i>
                </div>
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
