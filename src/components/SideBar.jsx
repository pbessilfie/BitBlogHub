import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import LoadingSkeleton from "./LoadingSkeleton";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setloading(true);
        const response = await fetch(
          "https://bitblog-backend.onrender.com/blogs"
        );
        const data = await response.json();
        setPopularBlogs(data.slice(0, 15));
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setloading(false);
      }finally{
        setloading(false)
      }
    
    };
    fetchBlog();
  }, []);
  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
        <div>
          {loading ? (
            <div className="space-y-3">
              <LoadingSkeleton cards={5} />
            </div>
          ) : (
            popularBlogs.slice(0, 5).map((blog) => (
              <div
                key={blog.id}
                className="my-5 border-b-2 border-spacing-2 px-4"
              >
                <h4 className="font-medium mb-2">{blog.title}</h4>
                <Link
                  to={"/"}
                  className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
                >
                  Read now
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      {/* popular blogs */}
      <div className="mt-20">
        <h3 className="text-2xl font-semibold px-4">Popular Blogs</h3>
        <div>
          {loading ? (
            <div className="space-y-3">
              <LoadingSkeleton cards={5} />
            </div>
          ) : (
            popularBlogs.slice(6, 10).map((blog) => (
              <div
                key={blog.id}
                className="my-5 border-b-2 border-spacing-2 px-4"
              >
                <h4 className="font-medium mb-2">{blog.title}</h4>
                <Link
                  to={"/"}
                  className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
                >
                  Read now
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
