import React from "react";
import Aboutimg from "../assets/About3.jpg";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { HiMiniStar } from "react-icons/hi2";

const OrderNow = () => {
  return (
    <div id="about" className="min-h-full ">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly">
        <div className=" mt-8 px-4 md:px-6 xl:px-0 xlg:mb-8 sm:max-w-xl md:max-w-md  ">
          <img
            src={Aboutimg}
            alt="About Us"
            className="w-full rounded-t-xl xlg:rounded-l-xl xlg:mt-2 p-2"
          />
        </div>

        <div className="  mt-8 px-4 md:px-6 xl:px-0 mb-4 sm:max-w-xl ">
          <h1 className="text-3xl font-bold text-orange-600 font-overpass mb-6 md:mb-4 ">
            Cheese Burger
          </h1>

          <p className=" text-xl text-left text-gray-400 mb-6 ">
            Temsum et lorem et sit, sed stet lorem sit. Temt ipsum et lorem et
            sit, sed stet lorem sit. Tempor erat elitr rebum at clita. Diam
            dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
            et lorem et sit, sed stet lorem sit clita duo justo magna dolore
            erat amet.
          </p>
          <h4 className="text-lg font-semibold text-black mb-2">
            <span className="text-orange-600 mr-1">$</span>
            49.0
          </h4>
          <div className="flex items-center text-yellow-400 mb-8">
            <HiMiniStar />
            <HiMiniStar />
            <HiMiniStar />
            <HiMiniStar />
            <HiMiniStar />
            <h3 className="text-black ml-2">(reviews)</h3>
          </div>
          <div className=" flex flex-col md:flex-row items-center justify-start md:justify-between   ">
            <div className="w-[10rem] md:w-[13rem] text-xl flex items-center  justify-around border border-1 px-1  md:px-4 py-2 rounded-full ">
              <RiArrowLeftSLine className="text-3xl md:text-4xl border border-1 rounded-full p-1 cursor-pointer" />{" "}
              1
              <RiArrowRightSLine className="text-3xl md:text-4xl border border-1 rounded-full p-1 cursor-pointer" />
            </div>
            <button className="font-overpass text-xl font-medium bg-orange-600 text-white px-4 py-2 md:px-6 md:py-4  rounded-full mt-4 md:mt-0 md:ml-12 hover:bg-orange-500">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
