import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { FaClock, FaUser } from "react-icons/fa";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    
    author,
    published_date,
    reading_time,
    content,
  } = data[0];

  return (
    <div className="">
      <Banner name={"Single Blog Page"} />

      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 p-4 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 max-auto">
          <div>
            <img src={image} alt={title} className="w-full mx-auto rounded " />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-blue-500 cursor-pointer mt-8">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            {" "}
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            {" "}
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              sed vulputate odio ut enim blandit volutpat maecenas volutpat
              blandit aliquam etiam erat velit scelerisque in dictum non
              consectetur a erat nam at lectus urna duis convallis convallis
              tellus id interdum velit laoreet id donec ultrices tincidunt arcu
              non sodales neque sodales ut etiam sit amet nisl purus in mollis
            </p><br/>
            <p>
              sed vulputate odio ut enim blandit volutpat maecenas volutpat
              blandit aliquam etiam erat velit scelerisque in dictum non
              consectetur a erat nam at lectus urna duis convallis convallis
              tellus id interdum velit laoreet id donec ultrices tincidunt arcu
              non sodales neque sodales ut etiam sit amet nisl purus in mollis
            </p><br/>
            <p>
              sed vulputate odio ut enim blandit volutpat maecenas volutpat
              blandit aliquam etiam erat velit scelerisque in dictum non
              consectetur a erat nam at lectus urna duis convallis convallis
              tellus id interdum velit laoreet id donec ultrices tincidunt arcu
              non sodales neque sodales ut etiam sit amet nisl purus in mollis
            </p><br/>
            <p>
              sed vulputate odio ut enim blandit volutpat maecenas volutpat
              blandit aliquam etiam erat velit scelerisque in dictum non
              consectetur a erat nam at lectus urna duis convallis convallis
              tellus id interdum velit laoreet id donec ultrices tincidunt arcu
              non sodales neque sodales ut etiam sit amet nisl purus in mollis
            </p><br/>
            <p>
              sed vulputate odio ut enim blandit volutpat maecenas volutpat
              blandit aliquam etiam erat velit scelerisque in dictum non
              consectetur a erat nam at lectus urna duis convallis convallis
              tellus id interdum velit laoreet id donec ultrices tincidunt arcu
              non sodales neque sodales ut etiam sit amet nisl purus in mollis
            </p><br/>
            <p>
              sed vulputate odio ut enim blandit volutpat maecenas volutpat
              blandit aliquam etiam erat velit scelerisque in dictum non
              consectetur a erat nam at lectus urna duis convallis convallis
              tellus id interdum velit laoreet id donec ultrices tincidunt arcu
              non sodales neque sodales ut etiam sit amet nisl purus in mollis
            </p>
          </div>
        </div>

        <div className="lg:w-1/2">
            <SideBar/>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
