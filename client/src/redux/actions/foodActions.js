import axios from 'axios';

export const getAllFood = () => (dispatch) => {
  dispatch({ type: 'GET_FOOD_REQUEST' });
  try {
    const response = axios.get('/api/food/getFood');
    console.log(response);
    dispatch({ type: 'GET_FOOD_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'GET_FOOD_FAILURE' });
  }
};
