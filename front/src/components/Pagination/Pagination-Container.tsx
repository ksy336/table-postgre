import React from 'react';
import { IPaginate } from '../Table/types';
import './Pagination.scss';
import PaginationViewComponent from './Pagination-View';

const PaginationContainer = ({ paginate, tableItems, itemsPerPage }: IPaginate) => {
  const totalItems = tableItems.length;
  const pageNumbers = [];
  for (let i = 1; i <= Math.floor(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return <PaginationViewComponent pageNumbers={pageNumbers} paginate={paginate} />;
};

export default PaginationContainer;
