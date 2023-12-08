/* eslint-disable react/prop-types */
const Pagination = ({ pageSize, currentPage, onPageChange, blogs }) => {
  const totalPages = blogs ? Math.ceil(blogs.length / pageSize) : 8;
 
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={
            pageNumber === currentPage
              ? "activePagination"
              : "p-2 mx-2 border hover:bg-gray-100"
          }
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };
  return (
    <div className="flex justify-center items-center m-10">
      <ul className="flex ">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="font-bold px-4 py-2 text-white bg-orange-500 rounded-sm cursor-pointer hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all duration-100"
          >
            Prev
          </button>
        </li>
        <div className="flex mx-4">{renderPaginationLinks()}</div>
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="font-bold px-4 py-2 text-white bg-orange-500 rounded-sm cursor-pointer hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all duration-100"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
