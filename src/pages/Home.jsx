import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import FoodCategories from "../components/FoodMenu";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <FoodCategories />
    </div>
  );
};

export default Home;
