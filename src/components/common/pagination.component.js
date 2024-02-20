import _ from "lodash";

const Paging = ({ movieLen, pageLen, currentPage, handlePageChange }) => {
  const pageCount = Math.ceil(movieLen / pageLen);
  const pages = _.range(1, pageCount + 1, 1); // to take an array of [1,2,3,....pageCount]

  if (movieLen <= pageLen) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          onClick={
            currentPage > 1 ? () => handlePageChange(currentPage - 1) : null
          }
          className="page-item"
        >
          <a className="page-link">Previous</a>
        </li>
        {pages.map((page) => (
          <li
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
        <li
          onClick={
            currentPage < pageCount
              ? () => handlePageChange(currentPage + 1)
              : null
          }
          className="page-item"
        >
          <a className="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Paging;
