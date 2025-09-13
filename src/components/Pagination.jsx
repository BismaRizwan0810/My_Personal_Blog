import React from "react";

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="flex justify-center gap-2 pb-10">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-yellow-400 rounded-lg disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx + 1}
          onClick={() => setCurrentPage(idx + 1)}
          className={`px-3 py-1 rounded-lg ${
            currentPage === idx + 1
              ? "bg-yellow-600 text-white"
              : "bg-yellow-300"
          }`}
        >
          {idx + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-yellow-400 rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
