import React, { ChangeEvent, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../types/types';
import { getDataForSorting } from '../../store/items-slice';
import './Select.scss';
import { Button } from 'antd';

const Select = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { inputValue: enteredValueForSorting, paginatedItems } = useSelector(
    (state: RootState) => state.items
  );
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredCondition, setEnteredCondition] = useState('');
  console.log(enteredValueForSorting);

  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setEnteredValue(e.target.value);
  };
  const selectConditionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setEnteredCondition(e.target.value);
  };
  const handleSubmitForSort = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submitData = {
      columnForSorting: enteredValue,
      conditionForSorting: enteredCondition,
      enteredValueForSorting,
    };
    dispatch(getDataForSorting(submitData));
    //const filteredData = paginatedItems.sort((a, b) => a.title.toLocalCompare(b.title) );
    const filteredData = paginatedItems.filter(
      (item: any) => item.title === enteredValueForSorting
    );
    console.log(filteredData);
  };

  return (
    <div className="filter-components">
      <form onSubmit={handleSubmitForSort}>
        <div className="items-filter">
          <div className="items-filter__control">
            <label>Filter by column:</label>
            <select value={enteredValue} onChange={selectHandler}>
              <option disabled value="">
                Filter by column
              </option>
              <option value="title">Title</option>
              <option value="amount">Amount</option>
              <option value="distance">Distance</option>
            </select>
          </div>
          <div className="items-filter__control">
            <label>Filter by condition:</label>
            <select value={enteredCondition} onChange={selectConditionHandler}>
              <option disabled value="">
                Filter by condition
              </option>
              <option value="equals">Equals Items</option>
              <option value="more">More than </option>
              <option value="less">Less than </option>
              <option value="contains">Contains </option>
            </select>
          </div>
        </div>
        <Button type="primary" htmlType="submit">
          Sort
        </Button>
      </form>
      <SearchBar />
    </div>
  );
};

export default Select;
