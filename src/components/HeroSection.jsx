import React from "react";
import fooda from "../assets/hero.png";
import { FaPlay } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <>
      <div className="relative bg-hero-pattern bg-cover bg-center min-h-screen text-white ">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="relative z-10 pt-20 flex flex-col xlg:flex-row items-center justify-around space-y-12 xlg:space-y-8 xl:space-y-0">
          <div className=" flex-shrink-">
            <h1 className="text-5xl font-overpass font-bold mb-4">
              Delicious Food Delivered to You!
            </h1>
            <p className="text-lg mb-16 font-overpass">
              Order your favorite meals from the comfort of your home.
            </p>
            <div className="flex space-x-4">
              <button className="font-overpass text-xl font-medium bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-500">
                Order Now
              </button>

              <button className="font-overpass text-xl font-medium bg-white text-black px-4 py-4 rounded-lg hover:bg-orange-500 hover:text-white flex items-center">
                <FaPlay className="text-2xl  mr-2" />{" "}
                {/* Add margin to the icon */}
                How to Order
              </button>
            </div>
          </div>
          <div className="rounded-full">
            <img
              src={fooda}
              alt="Rotate Dish"
              className=" max-w-sm 2xl:max-w-md h-auto  imgRotate "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
