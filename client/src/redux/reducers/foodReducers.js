export const getAllFoodReducer = (state = { foods: [] }, action) => {
  switch (action.type) {
    case 'GET_FOOD_REQUEST':
      return {
        payload: true,
        ...state,
      };
    case 'GET_FOOD_SUCCESS':
      return {
        payload: false,
        food: action.payload,
      };
    case 'GET_FOOD_FAILED':
      return {
        payload: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
