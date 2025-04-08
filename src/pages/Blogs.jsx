import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";

const Blogs = () => {
  return (
    <div>
      <Banner name={"Our Blogs"} />

      {/* all blogs container */}
      <div className="max-w-7xl mx-auto">
        <BlogPage/>
      </div>
    </div>
  );
};

export default Blogs;
