import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const book = useSelector((initialState) => initialState.bookHandler);

  return (
    <div>
      List of Books will be displayed here:

      {
            book.map((element) => (

              <li key={element.id}>
                <Book title={element.title} author={element.author} />
                <FaTrash />
              </li>
            ))
        }
      <Form />
    </div>
  );
};

export default Books;
