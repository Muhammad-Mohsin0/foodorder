import React from "react";
import Hero from "../assets/main.jpg";
import fooda from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center min-h-screen text-white ">
      <div className="flex items-center justify-around space-y-12">
        <div className="">
          <h1 className="text-4xl font-bold mb-4">
            Delicious Food Delivered to You!
          </h1>
          <p className="text-lg mb-8">
            Order your favorite meals from the comfort of your home.
          </p>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
            Order Now
          </button>
        </div>
        <div className="">
          <img
            src={fooda}
            alt="Rotate Dish"
            className="max-w-lg h-auto  imgRotate"
          />
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default HeroSection;
