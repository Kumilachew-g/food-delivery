export const addToCart = (food, quantity, varient) => (dispatch, getState) => {
  var cartItem = {
    name: food.name,
    _id: food._id,
    image: food.image,
    varient: varient,
    quantity: Number(quantity),
    prices: food.prices,
    price: food.prices[0][varient] * quantity,
  };

  dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const deleteCartItem = (food) => (dispatch) => {
  dispatch({ type: 'DELETE_CART_ITEM', payload: food });
};
