import React from 'react';
import { FaTrash } from 'react-icons/fa';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const bookinfo = [
    {
      id: 1,
      title: 'First Book',
      author: 'Random',
    },
  ];
  return (
    <div>
      List of Books will be displayed here:

      {
            bookinfo.map((element) => (

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
