import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
      <h2 style={{ fontSize: '35px' }}>Admin panel</h2>
    </div>
  );
}

export default AdminPage;
