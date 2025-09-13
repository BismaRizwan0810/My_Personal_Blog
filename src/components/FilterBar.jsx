import React from "react";

function FilterBar({ category, setCategory, search, setSearch }) {
  const categories = ["All", "Tech", "Travel", "Food"];

  return (
    <div className="flex justify-center items-center pt-10">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-6">
        {/* Category Buttons */}
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                category === cat
                  ? "bg-yellow-600 text-white shadow-md"
                  : "bg-yellow-200 text-gray-700 hover:bg-yellow-300 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input (rounded like buttons) */}
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-full border border-gray-300 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
        />
      </div>
    </div>
  );
}

export default FilterBar;
