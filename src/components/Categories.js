import React from 'react';
import { useDispatch } from 'react-redux';
import { status } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => { dispatch(status()); }}>
      Check status
    </button>
  );
};
export default Categories;
