import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="flex list-reset border border-grey-light rounded w-auto font-sans">
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <Link
                onClick={() => paginate(number)}
                className="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
                to="/search"
              >
                {number}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
