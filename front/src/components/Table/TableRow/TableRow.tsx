import React from 'react';
import { ITable } from '../types';

const TableRow = ({ timedate, title, amount, distance }: ITable) => {
  return (
    <div className="next-line__overall">
      <div className="next-line__items">
        <h4 className="data">{timedate}</h4>
      </div>
      <div className="next-line__items">
        <h4 className="data">{title}</h4>
      </div>
      <div className="next-line__items">
        <h4 className="data">{amount}</h4>
      </div>
      <div className="next-line__items">
        <h4 className="data">{distance} km</h4>
      </div>
    </div>
  );
};

export default TableRow;
