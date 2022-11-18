import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

let booktitle = '';
let author = '';

const handleChange = (event) => {
  if (event.target.className === 'titleBook') {
    booktitle = event.target.value;
  }
  if (event.target.className === 'nameAuthor') {
    author = event.target.value;
  }
};

const Form = () => {
  const dispatch = useDispatch();
  return (
    <form>
      <div>
        <h1>ADD NEW BOOK</h1>
      </div>
      <div>
        <input className="titleBook" type="text" placeholder="Book Title" onChange={handleChange} />
        <input className="nameAuthor" type="text" placeholder="Author Name" onChange={handleChange} />
      </div>
      <div>
        <button type="button" onClick={() => dispatch(addBook(booktitle, author))}>ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;
