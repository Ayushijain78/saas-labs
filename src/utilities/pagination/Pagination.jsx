import React, { useState, useEffect } from "react";
import "./styles.css";
import { PAGINATION_ENUM } from "./utils";

const Pagination = (props) => {
  const { data, pageNo, totalPages, handlePageChange } = props;

  const [currentPage, setCurrentPage] = useState(pageNo || 1);

  const totalItems = data.length;
  const pages = Math.ceil(totalItems / totalPages);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    handlePageChange(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
      handlePageChange(currentPage + 1);
    }
  };

  let numbers = [];
  for (let i = 1; i <= pages; i++) {
    numbers.push(i);
  }

  return (
    <div className="listOfPages">
      <ul className="list">
        <li onClick={handlePrev} className="pageno">
          {PAGINATION_ENUM.PREV}
        </li>
        {numbers.map((page, index) => (
          <li
            key={index}
            onClick={() => handlePageClick(page)}
            className={`pageno ${currentPage === page ? "active" : "pageno"}`}
          >
            {page}
          </li>
        ))}
        <li onClick={handleNext} className="pageno">
          {PAGINATION_ENUM.NEXT}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
