import React from 'react';
import { IPagination } from './types';

const PaginationViewComponent = ({ pageNumbers, paginate }: IPagination) => {
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

export default PaginationViewComponent;
