import axios from 'axios';

export const getAllFood = () => (dispatch) => {
  dispatch({ type: 'GET_FOOD_REQUEST' });
  try {
    const response = axios.get('/api/food/getfood');
    console.log(response);
    dispatch({ type: 'GET_FOOD_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_FOOD_FAILURE', payload: error });
  }
};
