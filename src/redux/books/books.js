export const initialState = [
  {
    id: 1,
    title: 'First Book',
    author: 'Random',
  },
];

export const addBook = () => ({
  type: 'ADDING_BOOK',
  id: 2,
  title: 'second book',
  author: 'random author',
});

export const delBook = () => ({
  type: 'REMOVING_BOOK',
  id: 1,
});

const bookHandler = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDING_BOOK':
      return [...state,
        {
          id: action.id,
          title: action.title,
          author: action.text,
        }];

    case 'REMOVING_BOOK': {
      return state.filter((element) => (element.id !== action.id));
    }

    default:
      return state;
  }
};

export default bookHandler;
