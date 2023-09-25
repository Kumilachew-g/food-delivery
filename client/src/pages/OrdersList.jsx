import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Filter from '../components/Filter';
import { getAllOrders } from '../redux/actions/orderActions';

function OrdersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div>
      <h1>Orders List</h1>
    </div>
  );
}

export default OrdersList;
