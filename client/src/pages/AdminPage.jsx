import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import UsersList from './UsersList';
import FoodList from './FoodList';
import AddFood from './AddFood';
import OrdersList from './OrdersList';

function AdminPage() {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = '/';
    }
  }, [currentUser.isAdmin]);

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <h2 style={{ fontSize: '35px' }}>Admin panel</h2>
          <ul className='admin-functions'>
            <li>
              <Link to='/admin/userslist'>Users List</Link>
            </li>
            <li>
              <Link to='/admin/foodlist'>Food List</Link>
            </li>
            <li>
              <Link to='/admin/addfood'>Add new food</Link>
            </li>
            <li>
              <Link to='/admin/orderslist'>Orders List</Link>
            </li>
          </ul>
          <Routes>
            <Route path='/' element={<UsersList />} exact />
            <Route path='userslist' element={<UsersList />} exact />
            <Route path='foodlist' element={<FoodList />} exact />
            <Route path='addfood' element={<AddFood />} exact />
            <Route path='orderslist' element={<OrdersList />} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
