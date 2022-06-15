import React, { useState } from 'react';
import './table.scss';
import TableRow from './TableRow/TableRow';
import { ITable } from './types';

const Table = () => {
  const [tableItems, setTableItems] = useState([]);

  return (
    <section>
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
      {tableItems?.map(({ timeDate, title, amount, distance }: ITable) => {
        return (
          <TableRow
            key={Math.random().toString()}
            timeDate={timeDate.toLocaleString()}
            title={title}
            amount={amount}
            distance={distance}
          />
        );
      })}
      <div className="next-line__overall">
        <div className="next-line__items">
          <h4 className="data">2022-06-12</h4>
        </div>
        <div className="next-line__items">
          <h4 className="data">Dress</h4>
        </div>
        <div className="next-line__items">
          <h4 className="data">2</h4>
        </div>
        <div className="next-line__items">
          <h4 className="data">200 km</h4>
        </div>
      </div>
    </section>
  );
};

export default Table;
