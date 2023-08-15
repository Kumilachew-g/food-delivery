export const getAllFoodReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_FOOD_REQUEST':
      return {
        ...state,
      };
    case 'GET_FOOD_SUCCESS':
      return {
        food: action.payload,
      };
    case 'GET_FOOD_FAILED':
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
