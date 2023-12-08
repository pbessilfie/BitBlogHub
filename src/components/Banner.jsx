import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = ({ name, bannerDescription, bannerLink }) => {
  return (
    <div className="text-white bg-black px-4 py-32 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          {name}
        </h1>

        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          {bannerDescription}
        </p>

        {bannerLink && (
          <div>
            <Link
              to="/"
              className="font-medium hover:text-orange-500 inline-flex items-center py-1"
            >
              Learn more <FaArrowRight className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
