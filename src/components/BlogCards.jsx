/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingSkeleton from "./CardSkeleton";

export default function BlogCards({
  blogs,
  currentPage,
  selectedCategory,
  pageSize,
  loading,
}) {
  const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {loading ? (
        <LoadingSkeleton cards={10}/>
      ) : (
        filteredBlogs.map((blog) => (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.id}
            className="p-5 shadow-lg rounded-md cursor-pointer"
          >
            <div className="">
              <img src={blog.image} alt={blog.title} className="w-full" />
            </div>
            <h3 className="mt-4 mb-2 font-bold hover:text-blue-600">
              {blog.title}
            </h3>
            <p className="mb-2 text-sm text-gray-600">
              <FaUser className="inline-flex items-center mr-2" />
              {blog.author}
            </p>
            <p className="text-sm text-gray-500">
              Published: {blog.published_date}
            </p>
          </Link>
        ))
      )}
    </div>
  );
}
