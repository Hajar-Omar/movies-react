import React from "react";

const Pagination = ({ total, itemsPerPage, paginate, currentPage }) => {
  let numbers = [];

  for (let i = 1; i < Math.ceil(total / itemsPerPage); i++) {
    numbers.push(i);
  }

  return (
    <nav aria-label="Page navigation" className="my-3">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className={currentPage === 1 ? "page-link disabled" : "page-link"}
            onClick={() => paginate(currentPage)}
          >
            Previous
          </button>
        </li>
        {numbers.map((e) => (
          <li key={e} className="page-item">
            <button
              className={currentPage === e ? "page-link active" : "page-link"}
              onClick={() => paginate(e)}
            >
              {e}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className={
              currentPage === numbers.length
                ? "page-link disabled"
                : "page-link"
            }
            onClick={() => {
              //  setCurrentPage((cur) => cur + 1); // cur++ not working
              paginate(currentPage); // paginate(currentPage) not working, state is async, not aware when it's done
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
