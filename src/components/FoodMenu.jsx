import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Coffee from "../assets/cup.svg";
import Burger from "../assets/burger.svg";
import Pizza from "../assets/pizza.svg";
import Wrap from "../assets/wraps.svg";
import Desi from "../assets/Desi-karahi.svg";
import IcedCold_Coffee from "../assets/IcedCold_Coffee.jpg";
import FlatWhite_Coffee from "../assets/FlatWhite_Coffee.jpg";
import Espresso_Coffee from "../assets/Espresso_Coffee.jpg";
import Cappucino_Coffee from "../assets/Cappucino_Coffee.jpg";
import FriedEgg_Burger from "../assets/FriedEgg_Burger.jpg";
import Meat_Burger from "../assets/Meat_Burger.jpg";
import GourmetCheese_Burger from "../assets/GourmetCheese_Burger.jpg";
import Cheese_Burger from "../assets/Cheese_Burger.jpg";
import Turkish_Pizza from "../assets/Turkish_Pizza.jpg";
import Italian_Pizza from "../assets/Italian_Pizza.jpg";
import Margarita_Pizza from "../assets/Margarita_Pizza.jpg";
import Vegetarian_Pizza from "../assets/Vegetarian_Pizza.jpg";
import Veg_Wraps from "../assets/Veg_Wraps.jpg";
import Burrito_Wraps from "../assets/Burrito_Wraps.jpg";
import Asian_Wraps from "../assets/Asian_Wraps.jpg";
import Meat_wraps from "../assets/Meat_wraps.jpg";

const Menu_Category = [
  {
    id: 1,
    name: "Coffee",
    image: Coffee,
  },
  {
    id: 2,
    name: "Burger",
    image: Burger,
  },
  {
    id: 3,
    name: "Pizza",
    image: Pizza,
  },
  {
    id: 4,
    name: "Wrap",
    image: Wrap,
  },
  {
    id: 5,
    name: "Karahi",
    image: Desi,
  },
];

const Card_Category = [
  {
    id: 1,
    category: "Coffee",
    items: [
      {
        id: 101,
        name: "Iced Cold Coffee",
        price: "4.50",
        image: IcedCold_Coffee,
      },
      {
        id: 102,
        name: "Flat White Coffee",
        price: "5.00",
        image: FlatWhite_Coffee,
      },
      {
        id: 103,
        name: "Espresso Coffee",
        price: "3.75",
        image: Espresso_Coffee,
      },
      {
        id: 104,
        name: "Cappuccino Coffee",
        price: "4.25",
        image: Cappucino_Coffee,
      },
      {
        id: 105,
        name: "Cappuccino Coffee",
        price: "4.25",
        image: Cappucino_Coffee,
      },
      {
        id: 106,
        name: "Cappuccino Coffee",
        price: "4.25",
        image: Cappucino_Coffee,
      },
    ],
  },
  {
    id: 2,
    category: "Burger",
    items: [
      {
        id: 201,
        name: "Fried Egg Burger",
        price: "6.50",
        image: FriedEgg_Burger,
      },
      {
        id: 202,
        name: "Meat Burger",
        price: "7.00",
        image: Meat_Burger,
      },
      {
        id: 203,
        name: "Gourmet Cheese Burger",
        price: "8.50",
        image: GourmetCheese_Burger,
      },
      {
        id: 204,
        name: "Cheese Burger",
        price: "5.75",
        image: Cheese_Burger,
      },
      {
        id: 205,
        name: "Cheese Burger",
        price: "5.75",
        image: Cheese_Burger,
      },
      {
        id: 206,
        name: "Cheese Burger",
        price: "5.75",
        image: Cheese_Burger,
      },
    ],
  },
  {
    id: 3,
    category: "Pizza",
    items: [
      {
        id: 301,
        name: "Turkish Pizza",
        price: "9.00",
        image: Turkish_Pizza,
      },
      {
        id: 302,
        name: "Italian Pizza",
        price: "8.50",
        image: Italian_Pizza,
      },
      {
        id: 303,
        name: "Margarita Pizza",
        price: "7.50",
        image: Margarita_Pizza,
      },
      {
        id: 304,
        name: "Vegetarian Pizza",
        price: "8.25",
        image: Vegetarian_Pizza,
      },
      {
        id: 305,
        name: "Vegetarian Pizza",
        price: "8.25",
        image: Vegetarian_Pizza,
      },
      {
        id: 306,
        name: "Vegetarian Pizza",
        price: "8.25",
        image: Vegetarian_Pizza,
      },
    ],
  },
  {
    id: 4,
    category: "Wrap",
    items: [
      {
        id: 401,
        name: "Veg Wraps",
        price: "6.00",
        image: Veg_Wraps,
      },
      {
        id: 402,
        name: "Burrito Wraps",
        price: "7.00",
        image: Burrito_Wraps,
      },
      {
        id: 403,
        name: "Asian Wraps",
        price: "6.50",
        image: Asian_Wraps,
      },
      {
        id: 404,
        name: "Meat Wraps",
        price: "7.50",
        image: Meat_wraps,
      },
      {
        id: 405,
        name: "Meat Wraps",
        price: "7.50",
        image: Meat_wraps,
      },
      {
        id: 406,
        name: "Meat Wraps",
        price: "7.50",
        image: Meat_wraps,
      },
    ],
  },
];

const FoodCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const filteredItems = selectedCategory
    ? Card_Category.find((cat) => cat.category === selectedCategory)?.items ||
      []
    : [];

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  return (
    <section id="categories" className="py-8 px-4 bg-gray-100 min-h-screen">
      <h2 className="text-center text-3xl  font-overpass  font-bold mb-8 ">
        Special Menu For You
      </h2>
      <div className="flex text-lg font-overpass justify-evenly overflow-x-auto snap-both md:snap-none space-x-4 p-4 ">
        {Menu_Category.map((selectbutton) => (
          <button
            key={selectbutton.id}
            onClick={() => setSelectedCategory(selectbutton.name)}
            className={`hover:text-orange-600 rounded-full px-4 py-2 snap-center flex-shrink-0 ${
              selectedCategory === selectbutton.name
                ? "bg-orange-600 text-white hover:text-white"
                : ""
            }`}
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

      <div className="flex  bg-orange-100 justify-center p-8 gap-11 rounded-lg">
        {filteredItems.length > 0 ? (
          <div className="relative w-full max-w-screen mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="embla__slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4  p-4"
                  >
                    <div className="relative w-full h-96 bg-white rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-end">
                        <div className="p-6">
                          <h3 className="text-xl font-medium text-white mb-2">
                            {item.name}
                          </h3>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            <span className="text-yellow-400">$</span>{" "}
                            {item.price}
                          </h4>
                          <a
                            href="#.2"
                            className="inline-flex items-center text-white"
                          >
                            Order Now <IoIosArrowForward className="text-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:opacity-60 p-4 rounded-full  text-white hover:text-white"
            >
              <IoIosArrowBack size={22} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2  bg-orange-400 hover:opacity-60 p-4 rounded-full  text-white hover:text-white"
            >
              <IoIosArrowForward size={22} />
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500 text-xl mt-8">
            Select a category to view items.
          </p>
        )}
      </div>
    </section>
  );
};

export default FoodCategories;
