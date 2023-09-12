import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../redux/actions/orderActions';
import Loading from '../components/Loading';
import Error from '../components/Error';

function OrdersPage() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return (
    <div>
      <h2 style={{ fontSize: '35px' }}>My Orders</h2>
      <hr />
      <div className='row justify-content-center'>
        {loading && <Loading />}
        {error && <Error error='Some thing went wrong' />}
        {orders &&
          orders.map((order) => {
            return (
              <div
                className='col-md-8 m-2 p-1'
                style={{ backgroundColor: 'red', color: 'white' }}
              >
                <div className='flex-container'>
                  <div className='text-start w-100 m-1'>
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <h2 style={{ fontSize: '25px' }}>Items</h2>
                          <hr />
                          <p>
                            {item.name} [{item.varient}] * {item.quantity}=
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className='text-start w-100 m-1'>
                    <h2 style={{ fontSize: '25px' }}>Address</h2>
                    <hr />
                    <p>Street: {order.shippingAddress.street}</p>
                    <p>City: {order.shippingAddress.city}</p>
                    <p>Country: {order.shippingAddress.country}</p>
                    <p>PinCode: {order.shippingAddress.pinCode}</p>
                  </div>
                  <div className='text-start w-100 m-1'>
                    <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                    <hr />
                    <p>Order Amount: {order.orderAmount}</p>
                    <p>Date: {order.createdAt.substring(0, 10)}</p>
                    <p>Transaction ID: {order.transactionId}</p>
                    <p>Order ID: {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default OrdersPage;
