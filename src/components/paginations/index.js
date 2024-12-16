import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './styles.module.css';

export default function YearPagination({ year, items }) {
  const itemsPerPage = 2; // 페이지당 표시할 항목 수
  const [currentItems, setCurrentItems] = useState(items.slice(0, itemsPerPage));
  const [pageCount, setPageCount] = useState(Math.ceil(items.length / itemsPerPage));
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setCurrentItems(items.slice(newOffset, newOffset + itemsPerPage));
    setCurrentPage(event.selected);
  };

  return (
    <div className={styles.paginationContainer}>
      <h2>{year}</h2>
      <div className={styles.itemsContainer}>{currentItems.map((item, index) => <div key={index}>{item}</div>)}</div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< Previous"
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        forcePage={currentPage}
      />
    </div>
  );
}
