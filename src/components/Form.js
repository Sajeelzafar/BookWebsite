import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

let booktitle = '';
let bookauthor = '';

const handleChange = (event) => {
  if (event.target.className === 'titleBook') {
    booktitle = event.target.value;
  }
  if (event.target.className === 'nameAuthor') {
    bookauthor = event.target.value;
  }
};

const Form = () => {
  const dispatch = useDispatch();
  return (
    <form className="form">
      <div className="formHeadingContainer">
        <h1 className="formHeading">ADD NEW BOOK</h1>
      </div>

      <div className="formInputContainer">
        <input className="titleBook" type="text" placeholder="Book Title" onChange={handleChange} />
        <input className="nameAuthor" type="text" placeholder="Author Name" onChange={handleChange} />

        <button
          className="addBookButton"
          type="button"
          onClick={() => {
            const obj = {
              item_id: uuidv4(),
              title: booktitle,
              author: bookauthor,
              category: 'Default',
            };
            dispatch(addBook(obj));
          }}
        >
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default Form;
