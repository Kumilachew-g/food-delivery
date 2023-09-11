import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllFoodsReducer } from './reducers/foodReducers';

import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer, loginUserReducer } from './reducers/userReducer';
import {
  getUserOrdersReducer,
  placeOrderReducer,
} from './reducers/orderReducer';

// combine all reducers
const finalReducer = combineReducers({
  getAllFoodsReducer: getAllFoodsReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
});

// save cart items to local storage
const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

// save user info to local storage
const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
