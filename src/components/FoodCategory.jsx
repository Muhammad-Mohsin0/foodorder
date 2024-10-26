import React from "react";
import { MdFastfood } from "react-icons/md";
import Coffee from "../assets/cup.svg";
import Burger from "../assets/burger.svg";
import Pizza from "../assets/pizza.svg";
import Wrap from "../assets/wraps.svg";
import Desi from "../assets/Desi-karahi.svg";

const categories = [
  { id: 1, name: "Pizza", icon: <MdFastfood />, image: "pizza.jpg" },
  { id: 2, name: "Sushi", icon: <MdFastfood />, image: "sushi.jpg" },
  { id: 3, name: "Burgers", icon: <MdFastfood />, image: "burgers.jpg" },
];

const FoodCategories = ({ addToCart }) => {
  return (
    <section id="categories" className="py-8 px-4 bg-gray-100">
      <h2 className="text-center text-3xl  font-overpass  font-bold mb-8 ">
        Special Menu For You
      </h2>
      <ul className="flex text-lg font-overpass  justify-evenly  ">
        <li className="hover:bg-orange-600 hover:text-white rounded-full px-4 py-2">
          <img
            src={Coffee}
            alt="Coffee Icon"
            className="w-9 h-9 inline mr-2 rounded-full bg-white p-1  "
          />
          Coffee
        </li>
        <li className="hover:bg-orange-600 hover:text-white rounded-full px-4 py-2">
          <img
            src={Burger}
            alt="Coffee Icon"
            className="w-9 h-9 inline mr-2 rounded-full bg-white p-1  "
          />
          Burger
        </li>
        <li className="hover:bg-orange-600 hover:text-white rounded-full px-4 py-2">
          <img
            src={Pizza}
            alt="Coffee Icon"
            className="w-9 h-9 inline mr-2 rounded-full bg-white p-1  "
          />
          Pizza
        </li>
        <li className="hover:bg-orange-600 hover:text-white rounded-full px-4 py-2">
          <img
            src={Wrap}
            alt="Coffee Icon"
            className="w-9 h-9 inline mr-2 rounded-full bg-white p-1  "
          />
          Wraps
        </li>
        <li className="hover:bg-orange-600 hover:text-white rounded-full px-4 py-2">
          <img
            src={Desi}
            alt="Coffee Icon"
            className="w-9 h-9 inline mr-2 rounded-full bg-white p-1  "
          />
          Karahi
        </li>
      </ul>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            {category.icon}
            <h3 className="text-lg font-bold mt-4">{category.name}</h3>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => addToCart(category)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default FoodCategories;
