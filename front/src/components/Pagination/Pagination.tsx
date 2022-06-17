import React from 'react';
import { IPaginate } from '../Table/types';
import './Pagination.scss';

const Pagination = ({ paginate, tableItems, itemsPerPage }: IPaginate) => {
  const totalItems = tableItems.length;
  const pageNumbers = [];
  for (let i = 1; i <= Math.floor(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers, totalItems, itemsPerPage);

  return (
    <footer className="footer">
      <section className="pagination">
        <div className="wrapper pagination__wrapper">
          <div className="container">
            <nav className="nav__pagination">
              {pageNumbers.map((page: number) => {
                return (
                  <a
                    href="#"
                    key={Math.random().toString()}
                    onClick={() => {
                      paginate(page);
                    }}
                  >
                    {page}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Pagination;
