import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../types/types';
import {
  getDataForSorting,
  filterByAmount,
  changeSortedStatus,
  filteredByColumn,
  filteredByCondition,
} from '../../store/items-slice';
import { Button } from 'antd';
import './Select.scss';

const Select = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    inputValue: enteredValueForSorting,
    paginatedItems,
    filterByColumn,
    filterByCondition,
  } = useSelector((state: RootState) => state.items);
  //const [enteredValue, setEnteredValue] = useState('');
  //const [enteredCondition, setEnteredCondition] = useState('');
  console.log(enteredValueForSorting);

  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(filteredByColumn(e.target.value));
  };
  const selectConditionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(filteredByCondition(e.target.value));
  };
  const handleSubmitForSort = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(changeSortedStatus(true));
    const submitData = {
      filterByColumn,
      filterByCondition,
      enteredValueForSorting,
    };
    dispatch(getDataForSorting(submitData));
    dispatch(filterByAmount(enteredValueForSorting));
  };

  return (
    <form onSubmit={handleSubmitForSort}>
      <div className="items-filter">
        <div className="items-filter__control">
          <label>Filter by column:</label>
          <select value={filterByColumn} onChange={selectHandler}>
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
          <select value={filterByCondition} onChange={selectConditionHandler}>
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
  );
};

export default Select;
