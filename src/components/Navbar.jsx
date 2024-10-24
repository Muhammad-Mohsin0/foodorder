import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className=" relative z-50">
      <nav className="bg-orange-800 p-4 flex justify-between px-12 fixed top-0 left-0 right-0 items-center shadow-xl ">
        <h1 className="text-white text-2xl font-bold font-overpass ">Majeka</h1>

        <div className="md:hidden flex ">
          <GiHamburgerMenu className="text-white text-3xl font-bold rounded-" />
        </div>

        <ul className="flex space-x-6 text-white text-lg font-overpass font-normal  hidden md:flex ">
          <li>
            <a href="#hero" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#categories" className="hover:text-gray-300">
              Menu
            </a>
          </li>
        </ul>
        <ul className="flex hidden text-lg space-x-4  md:flex">
          <li>
            <a
              href="#cart"
              className="text-white hover:text-gray-300 flex items-center"
            >
              <FaShoppingCart className="mt-1 text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="#cart"
              className="text-white hover:text-gray-300 flex items-center"
            >
              <FaUser className="mt-1 text-2xl" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
