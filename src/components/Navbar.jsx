import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-gray-300">
      <div>
        <img src={logo} alt="logo" className="w-[60px]" />
      </div>

      {/* menu */}
      <ul className="hidden md:flex ">
        <li>
          {/* uses name property to scroll */}
          <Link to="home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="workexp" smooth={true} offset={50} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={50} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger  */}
      <div className="md:hidden z-10" onClick={() => setNav(!nav)}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <ul
        className={`${
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center"
            : "hidden"
        }`}
      >
        <li className="py-6 text-4xl">
          <Link
            to="home"
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="about"
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="skills"
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="work"
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setNav(!nav)}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin
              {/* react-icons attribute */}
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github
              {/* react-icons attribute */}
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email
              {/* react-icons attribute */}
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume
              {/* react-icons attribute */}
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
