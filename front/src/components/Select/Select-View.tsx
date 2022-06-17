import React from 'react';
import { Button } from 'antd';
import { ISelect } from './types';
import SearchBar from '../SearchBar/SearchBar';

const SelectView = ({
  handleSubmitForSort,
  filterByColumn,
  selectHandler,
  filterByCondition,
  selectConditionHandler,
}: ISelect) => {
  return (
    <div className="filter-components">
      <form className="form form-submit" onSubmit={handleSubmitForSort}>
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
              <option value="equal">Equal</option>
              <option value="more">More </option>
              <option value="less">Less </option>
              <option value="contains">Contains </option>
            </select>
          </div>
        </div>
        <SearchBar />
        <div className="button button-submit">
          <Button type="primary" htmlType="submit" className="button">
            Sort
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SelectView;
