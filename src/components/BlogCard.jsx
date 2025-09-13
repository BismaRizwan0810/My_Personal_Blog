import React from "react";

function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      {/* Image with hover zoom */}
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Category Tag */}
        <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
          {post.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold mt-3 text-gray-800 hover:text-yellow-600 transition">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-3 flex-grow">
          {post.description}
        </p>

        {/* Date - Always at bottom */}
        <p className="text-gray-400 text-xs mt-3">{post.date}</p>
      </div>
    </div>
  );
}

export default BlogCard;
