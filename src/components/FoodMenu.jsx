import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import Coffee from "../assets/cup.svg";
import Burger from "../assets/burger.svg";
import Pizza from "../assets/pizza.svg";
import Wrap from "../assets/wraps.svg";
import Desi from "../assets/Desi-karahi.svg";
import Turkish_Pizza from "../assets/Turkish_Pizza.jpg";

const Menu_Category = [
  { id: 1, name: "Coffee", image: Coffee },
  { id: 2, name: "Burger", image: Burger },
  { id: 3, name: "Pizza", image: Pizza },
  { id: 4, name: "Wraps", image: Wrap },
  { id: 5, name: "Karahi", image: Desi },
];
const Card_Category = [
  { id: 1, name: "Turkish Pizza", price: "8.75", image: Turkish_Pizza },
  { id: 2, name: "Burger", price: "5.50", image: Burger },
  { id: 3, name: "Wraps", price: "6.25", image: Wrap },
  { id: 4, name: "Coffee", price: "3.00", image: Coffee },
  // { id: 5, name: "Karahi", price: "12.00", image: Desi },
];
const FoodCategories = () => {
  return (
    <section id="categories" className="py-8 px-4 bg-gray-100 min-h-screen">
      <h2 className="text-center text-3xl  font-overpass  font-bold mb-8 ">
        Special Menu For You
      </h2>
      <div className="flex text-lg font-overpass justify-evenly overflow-x-auto snap-both md:snap-none space-x-4 p-4 ">
        {Menu_Category.map((selectbutton) => (
          <button
            key={selectbutton.id}
            className="hover:bg-orange-600 hover:text-white rounded-full px-4 py-2 snap-center flex-shrink-0"
          >
            <img
              src={selectbutton.image}
              alt={selectbutton.name}
              className="w-9 h-9 inline mr-2 rounded-full bg-white p-1  "
            />
            {selectbutton.name}
          </button>
        ))}
      </div>

      <div className=" flex flex-wrap bg-yellow-200 justify-center p-8 gap-11 rounded-lg">
        {Card_Category.map((category) => (
          <div
            key={category.id}
            className="relative w-72 h-96 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end  ">
              <div className="p-6">
                <h3 className="text-xl font-medium text-white font-overpass mb-2 ">
                  {category.name}
                </h3>
                <h4 className="text-lg font-semibold text-white font-overpass mb-2">
                  <span className="text-center font-medium text-yellow-400 ">
                    $
                  </span>
                  {category.price}
                </h4>
                <a
                  href="#"
                  className="inline-flex items-center text-white font-overpass font-semibold"
                >
                  Order Now
                  <IoIosArrowForward className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodCategories;
