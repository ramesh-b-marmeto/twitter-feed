import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Pagination = ({ pageNum, perPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / perPage);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const match = location.pathname.match(/\/page\/(\d+)/);
    const page = match ? parseInt(match[1], 10) : 1;
    if (page !== pageNum) {
      onPageChange(page);
    }
  }, [location.pathname]);

  const handlePageChange = (newPage) => {
    onPageChange(newPage);
    
    // Determine the base path and append the new page number correctly
    const basePath = location.pathname.replace(/\/page\/\d+$/, "").replace(/\/$/, "");
    const updatedPath = `${basePath}/page/${newPage}`;
    navigate(updatedPath);
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex gap-2 mt-4">
      <button 
        onClick={() => handlePageChange(pageNum - 1)} 
        disabled={pageNum === 1}
        className="px-2 py-1 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-2 py-1 rounded ${
            pageNum === index + 1 ? "bg-blue-500 text-white" : ""
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button 
        onClick={() => handlePageChange(pageNum + 1)} 
        disabled={pageNum === totalPages}
        className="px-2 py-1 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
