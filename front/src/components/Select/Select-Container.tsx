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
import './Select.scss';
import SelectView from './Select-View';

const SelectContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    inputValue: enteredValueForSorting,
    filterByColumn,
    filterByCondition,
  } = useSelector((state: RootState) => state.items);

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
    <SelectView
      handleSubmitForSort={handleSubmitForSort}
      filterByColumn={filterByColumn}
      selectHandler={selectHandler}
      filterByCondition={filterByCondition}
      selectConditionHandler={selectConditionHandler}
    />
  );
};

export default SelectContainer;
