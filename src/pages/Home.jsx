import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";
const Home = () => {
  return (
    <div>
      <Banner
        name={"Welcome to our Blog"}
        bannerDescription={
          "Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and turtorials."
        }
        bannerLink
      />

      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Home;
