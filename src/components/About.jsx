import React from "react";
import Aboutimg from "../assets/About3.jpg";

const About = () => {
  return (
    <div className="min-h-full ">
      {/* Image Div with Fixed Width */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly">
        <div className=" mt-8 px-4 md:px-6 xl:px-0 xlg:mb-8 sm:max-w-xl md:max-w-lg  ">
          <img
            src={Aboutimg}
            alt="About Us"
            className="w-full  rounded-t-xl xlg:rounded-l-xl xlg:mt-2 "
          />
        </div>

        {/* Text Div with Expanding Width and Left Space for Large Screens */}
        <div className="  mt-8 px-4 md:px-6 xl:px-0 mb-4 sm:max-w-xl ">
          <h1 className="text-3xl font-bold text-orange-600 font-overpass mb-6 md:mb-4 ">
            About us ~
          </h1>
          <h1 className="text-4xl font-bold text-black font-overpass mb-4 md:mb-4">
            Welcome to Jungle-Food
          </h1>
          <p className=" text-xl text-left text-gray-400 mb-6 ">
            Temsum et lorem et sit, sed stet lorem sit. Temt ipsum et lorem et
            sit, sed stet lorem sit. Tempor erat elitr rebum at clita. Diam
            dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
            et lorem et sit, sed stet lorem sit clita duo justo magna dolore
            erat amet.
          </p>
          <button className="font-overpass text-xl font-medium bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
