import React from 'react';
import PropTypes from 'prop-types';

// const ff = () => fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/a0EBuQKzzPLsbomuWCDX/books',
//   {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//       item_id: "item1",
//       title: "The Great Gatsby",
//       author: "John Smith",
//       category: "Fiction"
//     }),
//   }).then((resp) => resp.text());
//   console.log(ff());

const Book = ({ title, author }) => (
  <div>
    <h1>
      Title of the book is
      {title}
    </h1>
    <h2>
      Author of the book is
      {author}
    </h2>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
