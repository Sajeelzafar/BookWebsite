import { combineReducers, createStore } from 'redux';
import statusHandler from './categories/categories';
import bookHandler from './books/books';

const rootReducer = combineReducers({
  bookHandler,
  statusHandler,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
