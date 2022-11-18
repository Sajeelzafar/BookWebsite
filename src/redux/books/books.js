import { v4 as uuidv4 } from 'uuid';

export const initialState = [
  {
    id: 1,
    title: 'First Book',
    author: 'Random',
  },
];

export const addBook = (booktitle, bookauthor) => ({
  type: 'ADDING_BOOK',
  id: uuidv4(),
  title: booktitle,
  author: bookauthor,
});

export const delBook = (delId) => ({
  type: 'REMOVING_BOOK',
  id: delId,
});

const bookHandler = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDING_BOOK':
      return [...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        }];

    case 'REMOVING_BOOK': {
      return state.filter((element) => (element.id !== action.id));
    }

    default:
      return state;
  }
};

export default bookHandler;
