import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllFoodsReducer } from './reducers/foodReducers';

import { cartReducer } from './reducers/cartReducer';

const finalReducer = combineReducers({
  getAllFoodsReducer: getAllFoodsReducer,
  cartReducer: cartReducer,
});

const initialState = {};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
