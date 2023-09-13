import axios from 'axios';

export const getAllFood = () => async (dispatch) => {
  dispatch({ type: 'GET_FOODS_REQUEST' });
  try {
    const response = await axios.get('/api/foods/getallfoods');
    console.log(response);
    dispatch({ type: 'GET_FOODS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_FOODS_FAILED', payload: error });
  }
};

//

export const filterFood = (searchKey, categoryKey) => async (dispatch) => {
  var filteredFoods;
  dispatch({ type: 'GET_FOODS_REQUEST' });
  try {
    const response = await axios.get('/api/foods/getallfoods');
    console.log(response);
    filteredFoods = response.data.filter((food) =>
      food.name.toLowerCase().includes(searchKey)
    );
    dispatch({ type: 'GET_FOODS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_FOODS_FAILED', payload: error });
  }
};
