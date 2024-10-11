import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className=" ">
      <nav className="bg-orange-800 p-4 flex justify-between px-12 items-center shadow-lg ">
        <h1 className="text-white text-xl font-bold ">Majeka</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="#hero" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#categories" className="hover:text-gray-300">
              Menu
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#cart"
              className="text-white hover:text-gray-300 flex items-center"
            >
              <FaShoppingCart className="mt-1" />
            </a>
          </li>
          <li>
            <a
              href="#cart"
              className="text-white hover:text-gray-300 flex items-center"
            >
              <FaUser className="mt-1" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
