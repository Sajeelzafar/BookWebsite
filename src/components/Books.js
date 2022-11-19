import React, { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { delBook, fetchBook } from '../redux/books/books';
import Book from './Book';
import Form from './Form';
import loadingIcon from './LoadingIcon.JPG';

const Books = () => {
  const book = useSelector((initialState) => initialState.bookHandler);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);
  return (
    <div>
      {
      book.map((element) => (
        <section key={element.id} className="Booksection">
          <div className="leftColumnComplete">
            <div className="leftColumn">
              <span className="categoryHeading"> Category </span>
              <Book title={element.title} author={element.author} />
              <ul className="bookOptions">
                <li className="bookOptionItems"> Comments </li>
                <li className="bookOptionItems">
                  <FaTrash onClick={() => dispatch(delBook(element.id))} />
                </li>
                <li className="bookOptionItems"> Edit </li>
              </ul>
            </div>
            <div className="leftColumnIconContainer">
              <div className="leftColumnIcon">
                <img src={loadingIcon} alt="Loading Icon" />
              </div>
              <div className="leftColumnPercentContainer">
                <h2 className="leftColumnPercent">
                  {Math.floor(Math.random() * 101)}
                  %
                </h2>
                <span className="leftColumnPercentText">Completed</span>
              </div>
            </div>
          </div>

          <div className="rightColumn">
            <span className="rightColumnHeading">CURRENT CHAPTER</span>
            <span className="rightColumnText">Chapter</span>
            <button className="rightColumnButton" type="button">UPDATE PROGRESS</button>
          </div>
        </section>
      ))
        }
      <Form />
    </div>
  );
};

export default Books;
