import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'a0EBuQKzzPLsbomuWCDX';
export const initialState = [
  {
    id: 1,
    title: 'First Book',
    author: 'Random',
  },
];

export const fetchBook = createAsyncThunk(
  'FETCH',
  async () => {
    const response = await (fetch(`${url}/apps/${appId}/books`)).then((res) => res.json());
    return response;
  },
);

export const addBook = createAsyncThunk(
  'ADDING_BOOK',
  async (obj, thunkAPI) => {
    const task = await fetch(`${url}/apps/${appId}/books`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(obj),
      }).then((resp) => resp.text());
    thunkAPI.dispatch(fetchBook());
    return task;
  },
);

export const delBook = createAsyncThunk(
  'REMOVING_BOOK',
  async (itemID, thunkAPI) => {
    await fetch(`${url}/apps/${appId}/books/${itemID}`, {
      method: 'DELETE',
    }).then((res) => res.text());
    thunkAPI.dispatch(fetchBook());
  },
);

const bookHandler = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDING_BOOK': {
      return [...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        }];
    }
    case 'REMOVING_BOOK': {
      return state.filter((element) => (element.id !== action.id));
    }

    case 'FETCH/fulfilled': {
      const newBookList = [];
      Object.entries(action.payload).forEach((item) => {
        newBookList.push({
          id: item[0],
          title: item[1][0].title,
          author: item[1][0].author,
        });
      });
      return newBookList;
    }

    default:
      return state;
  }
};

export default bookHandler;
