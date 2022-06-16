import React, { ChangeEvent, useState } from 'react';
import { setInputValue } from '../../store/items-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/types';
import './SearchBar.scss';

const SearchBar = () => {
  //const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };

  return (
    <div className="wrapper search__wrapper">
      <div className="search">
        <input
          id="search"
          type="search"
          className="search-field"
          placeholder="Search"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setInputValue(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
