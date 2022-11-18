import { combineReducers, createStore } from 'redux';
import statusHandler from './categories/categories';
import bookHandler from './books/books';

const rootReducer = combineReducers({
  bookHandler,
  statusHandler,
});

const store = createStore(
  rootReducer,
);

export default store;
