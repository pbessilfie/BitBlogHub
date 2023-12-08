import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaDribbble, FaBars, FaTimes } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import "../App.css";
import Login from "./Login";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [register, setRegister] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/blogs",
      link: "Blogs",
    },
    {
      path: "/about",
      link: "About",
    },
    {
      path: "/contact",
      link: "Contact",
    },
    {
      path: "/service",
      link: "Service",
    },
  ];
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="p-4 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center  w-[180px] ">
          {" "}
          <div className="md:hidden flex">
            <button className="cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
          <a href="/" className="text-xl font-bold text-white">
            BitBlog <span className="text-orange-500">Hub</span>
          </a>
        </div>

        {/* navlinks for lg devices */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navLinks.map(({ path, link }) => (
            <li key={path} className="text-white">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* menu icons */}
        <div className="text-white lg:flex gap-4 items-center sm:flex ">
          <a href="/" className="hover:text-orange-500">
            <FaMeta />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter />
          </a>
          <button
            className="bg-orange-500 text-white font-medium px-6 py-2  rounded-md  hover:bg-white hover:text-orange-500 transition-all duration-200"
            onClick={() => setRegister(!register)}
          >
            Log in
          </button>
        </div>

        {/* navlinks for mobile devices */}
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navLinks.map(({ path, link }) => (
            <li key={path} className="text-black">
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {register && (
        <Login
          register={register}
          setRegister={setRegister}
          iconColor={"text-orange-500"}
          btnHover={"hover:bg-orange-500 hover:text-white"}
        />
      )}
    </header>
  );
};
export default Navbar;
