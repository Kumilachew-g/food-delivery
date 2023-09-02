import axios from 'axios';

export const registerUser = (user) => (dispatch) => {
  dispatch({ type: 'USER_REGISTER_REQUEST' });

  try {
    axios.post('/api/users/register', { user });
    dispatch({ type: 'USER_REGISTER_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'USER_REGISTER_FAIL', payload: error });
  }
};
