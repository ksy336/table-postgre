import React from 'react';
import { ITable, ITableItems } from './types';
import TableRow from './TableRow/TableRow';
import PaginationContainer from '../Pagination/Pagination-Container';
import SelectContainer from '../Select/Select-Container';

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
        <SelectContainer />
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
      <PaginationContainer
        paginate={paginate}
        tableItems={tableItems}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default TableView;
