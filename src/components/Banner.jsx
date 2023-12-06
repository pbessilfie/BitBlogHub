import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = ({ name, bannerDescription, bannerLink }) => {
  return (
    <div className="text-white bg-black px-4 py-32 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          {name}
        </h1>
        {bannerDescription && (
          <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
            Start your blog today and join a community of writers and readers
            who are passionate about sharing their stories and ideas. We offer
            everything you need to get started, from helpful tips and
            turtorials.
          </p>
        )}

       { bannerLink && <div>
          <Link
            to="/"
            className="font-medium hover:text-orange-500 inline-flex items-center py-1"
          >
            Learn more <FaArrowRight className="ml-2" />
          </Link>
        </div>}
      </div>
    </div>
  );
};

export default Banner;
