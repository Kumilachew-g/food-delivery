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

export const getFoodById = () => async (dispatch) => {
  dispatch({ type: 'GET_FOOD_BY_ID_REQUEST' });
  try {
    const response = await axios.get('/api/foods/getfoodbyid');
    console.log(response);
    dispatch({ type: 'GET_FOOD_BY_ID_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_FOOD_BY_ID_FAILED', payload: error });
  }
};

//

export const filterFood = (searchKey, category) => async (dispatch) => {
  var filteredFoods;
  dispatch({ type: 'GET_FOODS_REQUEST' });
  try {
    const response = await axios.get('/api/foods/getallfoods');
    console.log(response);

    //  search foods by name
    filteredFoods = response.data.filter((food) =>
      food.name.toLowerCase().includes(searchKey.toLowerCase())
    );

    // filter foods by category
    if (category !== 'all') {
      filteredFoods = response.data.filter(
        (food) => food.category.toLowerCase() === category.toLowerCase()
      );
    }

    dispatch({ type: 'GET_FOODS_SUCCESS', payload: filteredFoods });
  } catch (error) {
    dispatch({ type: 'GET_FOODS_FAILED', payload: error });
  }
};

//  add food action

export const addFood = (food) => async (dispatch) => {
  dispatch({ type: 'ADD_FOOD_REQUEST' });
  try {
    const response = await axios.post('/api/foods/addfood', { food });
    console.log(response);
    dispatch({ type: 'ADD_FOOD_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'ADD_FOOD_FAILED', payload: error });
  }
};
