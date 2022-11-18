import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { delBook } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const book = useSelector((initialState) => initialState.bookHandler);
  const dispatch = useDispatch();

  return (
    <div>
      List of Books will be displayed here:

      {
            book.map((element) => (

              <li key={element.id}>
                <Book title={element.title} author={element.author} />
                <FaTrash onClick={() => dispatch(delBook(element.id))} />
              </li>
            ))
        }
      <Form />
    </div>
  );
};

export default Books;
