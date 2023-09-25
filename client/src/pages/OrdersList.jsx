import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Filter from '../components/Filter';
import { getAllOrders } from '../redux/actions/orderActions';

function OrdersList() {
  const dispatch = useDispatch();
  const getOrdersState = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getOrdersState;

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error='Something went wrong' />}
      <table className='table table-striped table-bordered'>
        <thead className='table-dark'>
          <tr>
            <th>Order ID</th>
            <th>Email</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userId}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>Status</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;
