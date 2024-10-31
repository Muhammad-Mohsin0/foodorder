import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import FoodCategories from "../components/FoodMenu";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <FoodCategories />
      <Footer />
    </div>
  );
};

export default Home;
