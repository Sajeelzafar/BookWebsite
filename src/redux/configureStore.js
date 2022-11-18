import { combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import statusHandler from './categories/categories';
import bookHandler from './books/books';

const rootReducer = combineReducers({
  bookHandler,
  statusHandler,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
