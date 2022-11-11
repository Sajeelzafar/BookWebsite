import React from 'react';
import PropTypes from 'prop-types';

const Book = ({title, author}) => {
    return (
        <div>
            <h1>Title of the book is {title}</h1>
            <h2>Author of the book is {author}</h2>
        </div>
    )
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}

export default Book