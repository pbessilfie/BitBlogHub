import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      let url = `https://bitblog-backend.onrender.com/blogs?page=${currentPage}&limit=${pageSize}`;
      try {
        setLoading(true);
        //   filter by category
        if (selectedCategory) {
          url += `&category=${selectedCategory}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };
  return (
    <div>
      {/* category section */}
      <div>
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* blogCards section */}
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          {" "}
          <BlogCards
            blogs={blogs}
            currentPage={currentPage}
            selectedCategory={selectedCategory}
            pageSize={pageSize}
            loading={loading}
          />
        </div>

        {/* sidebar component */}
        <div className="w-full lg:w-1/4">
          <SideBar />
        </div>
      </div>

      {/* pagination section */}

      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          pageSize={pageSize}
          blogs={blogs}
        />
      </div>
    </div>
  );
};

export default BlogPage;
