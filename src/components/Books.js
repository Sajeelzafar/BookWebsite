import React, { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { delBook, fetchBook } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const book = useSelector((initialState) => initialState.bookHandler);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);
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
