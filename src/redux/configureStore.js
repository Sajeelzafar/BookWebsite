import { combineReducers, createStore } from 'redux';
import statusHandler from './categories/categories';
import bookHandler from './books/books';

const rootReducer = combineReducers({
  bookHandler,
  statusHandler,
});

createStore(rootReducer);
