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
      <div className="flex text-lg font-overpass  justify-evenly  overflow-x-auto snap-both md:snap-none space-x-4 p-4 ">
        <button className=" hover:bg-orange-600 hover:text-white rounded-full px-4 py-2 snap-center flex-shrink-0">
          <img
            src={Coffee}
            alt="Coffee Icon"
            className="w-9 h-9 inline mr-2 rounded-full bg-white p-1  "
          />
          Coffee
        </button>
        <button className="hover:bg-orange-600 hover:text-white rounded-full px-4 py-2 snap-center flex-shrink-0">
          <img
            src={Burger}
            alt="Coffee Icon"
            className="w-9 h-9 inline mr-2 rounded-full bg-white p-1  "
          />
          Burger
        </button>
        <button className="hover:bg-orange-600 hover:text-white rounded-full px-4 py-2 snap-center flex-shrink-0">
          <img
            src={Pizza}
            alt="Coffee Icon"
            className="w-9 h-9 inline mr-2 rounded-full bg-white p-1  "
          />
          Pizza
        </button>
        <button className="hover:bg-orange-600 hover:text-white rounded-full px-4 py-2 snap-center flex-shrink-0">
          <img
            src={Wrap}
            alt="Coffee Icon"
            className="w-9 h-9 inline mr-2 rounded-full bg-white p-1  "
          />
          Wraps
        </button>
        <button className="hover:bg-orange-600 hover:text-white rounded-full px-4 py-2 snap-center flex-shrink-0">
          <img
            src={Desi}
            alt="Coffee Icon"
            className="w-9 h-9 inline mr-2 rounded-full bg-white p-1  "
          />
          Karahi
        </button>
      </div>

      <div className="grid grid-cols-3 items-center justify-center">
        <div className="  gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold mt-4">Pizza</h3>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={""}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="  gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold mt-4">Pizza</h3>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={""}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className=" gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-bold mt-4">Pizza</h3>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={""}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
