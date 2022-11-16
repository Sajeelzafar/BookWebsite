export const addBook = () => ({
  type: 'ADDING_BOOK',
  id: null,
  title: null,
  author: null,
});

export const delBook = () => ({
  type: 'REMOVING_BOOK',
  id: null,
  title: null,
  author: null,
});

const bookHandler = (state = [], action) => {
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
