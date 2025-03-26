import { FaAddressBook, FaMailBulk, FaPhone } from "react-icons/fa";
import Banner from "../components/Banner";
const Contact = () => {
  const contactLogo = "/undraw_Contact_us_re_4qqt.png";
  return (
    <div>
      <Banner
        name={"Contact Us"}
        bannerDescription={"Here are few ways to get in touch with us"}
      />
      <div className="flex items-center justify-evenly">
        <div className=" sm:w-96 md:w-10/12 lg:w-1/2 mx-auto">
          <img src={contactLogo} className=" h-full w-full object-cover" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 max-w-[1500px] mx-auto">
          {/* contact form */}
          <div className="flex flex-col w-[350px] p-2 sm:border-b sm:border-gray-200 mx-auto">
            <h2 className="text-xl mb-8 ">Message Us</h2>

            <form className="flex flex-col w-full ">
              <input
                type="text"
                name="text"
                placeholder="Your name"
                className="mb-4 sm:mb-8 border border-gray-500 rounded  px-2 shadow-lg w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="name@gmail.com"
                className="mb-8 lg:mb-4 border border-gray-500 rounded  px-2 shadow-lg w-full"
              />
              <textarea
                rows="4"
                cols={"50"}
                placeholder="Enter Your Message"
                className="mb-8 lg:mb-4 border border-gray-500 rounded  px-2 shadow-lg w-full"
              ></textarea>
              <div className="w-1/2 mx-auto ">
                <button className="w-full bg-orange-500 text-white font-medium px-6 py-2  rounded-md  hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500 transition-all duration-200 mb-4">
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="max-w-[350px] mx-auto">
            <div className="w-full h-20 flex flex-col justify-between px-4 mb-4">
              <h4 className="w-full flex items-center text-xl">
                <FaPhone className="mr-2" />
                Our Phone
              </h4>
              <span className="text-sm text-gray-500 ml-2">
                +233 24 850 3913
              </span>
            </div>
            <div className="w-full h-20 flex flex-col justify-between px-4 mb-4">
              <h4 className="w-full flex items-center text-xl">
                <FaMailBulk className="mr-2" />
                Email
              </h4>
              <span className="text-sm text-gray-500 ml-2">
                +233 24 850 3913
              </span>
            </div>
            <div className="w-full h-20 flex flex-col justify-between px-4 mb-4">
              <h4 className="w-full flex items-center text-xl">
                <FaAddressBook className="mr-2" />
                Address
              </h4>
              <span className="text-sm text-gray-500 ml-2">
                +233 24 850 3913
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
