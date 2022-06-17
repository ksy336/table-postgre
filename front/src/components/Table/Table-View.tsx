import React from 'react';
import { ITable, ITableItems } from './types';
import TableRow from './TableRow/TableRow';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import Select from '../Select/Select';

const TableView = ({
  tableItems,
  paginate,
  itemsPerPage,
  slicedItemsPerPage,
  sortedList,
  isSorted,
}: ITableItems) => {
  return (
    <>
      <section>
        <div className="filter-components">
          <Select />
          <SearchBar />
        </div>
        <div className="first-line__title">
          <div className="first-line__first">
            <h4 className="data">Date</h4>
          </div>
          <div className="first-line__first">
            <h4 className="data">Title</h4>
          </div>
          <div className="first-line__first">
            <h4 className="data">Amount</h4>
          </div>
          <div className="first-line__first">
            <h4 className="data">Distance</h4>
          </div>
        </div>
        {!isSorted &&
          slicedItemsPerPage?.map(({ timedate, title, amount, distance }: ITable) => {
            return (
              <TableRow
                key={Math.random().toString()}
                timedate={new Date(timedate).toISOString().slice(0, 10)}
                title={title}
                amount={amount}
                distance={distance}
              />
            );
          })}
        {isSorted &&
          sortedList?.map(({ timedate, title, amount, distance }: ITable) => {
            return (
              <TableRow
                key={Math.random().toString()}
                timedate={new Date(timedate).toISOString().slice(0, 10)}
                title={title}
                amount={amount}
                distance={distance}
              />
            );
          })}
      </section>
      <Pagination paginate={paginate} tableItems={tableItems} itemsPerPage={itemsPerPage} />
    </>
  );
};

export default TableView;
