import React from "react";
import fooda from "../assets/hero.svg";
import { FaPlay } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <>
      <div className="relative bg-hero-pattern min-h-screen text-white flex items-center justify-center overflow-hidden animate-fade-background pt-24 pb-8">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col xl:flex-row items-center justify-center xl:justify-around w-full ">
          <div className=" text-center xl:w-[44%]  px-4">
            <h1 className="text-3xl md:text-4xl xl:text-left font-overpass font-bold mb-4 sm:mb-2 px-2 xl:p-0">
              Delicious Food Delivered to You!
            </h1>
            <p className="text-xl md:text-2xl xl:text-left mb-4 sm:mb-12 font-overpass ">
              Order your favorite meals from the comfort of your home.
            </p>
            <div className="flex items-center justify-center xl:justify-start  space-x-4">
              <button className="font-overpass text-xl font-medium bg-orange-600 text-white px-4 py-4 sm:px-6 rounded-lg hover:bg-orange-500">
                Order Now
              </button>

              <button className="font-overpass text-xl font-medium bg-white text-black px-4 py-4 sm:px-6 rounded-lg hover:bg-orange-500 hover:text-white flex items-center">
                <FaPlay className="text-2xl  mr-2" />
                How to Order
              </button>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <img
              src={fooda}
              alt="Rotate Dish"
              className=" max-w-xs sm:max-w-sm xl:max-w-md h-auto imgRotate "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
