import { useState } from "react";
import About from "./components/About";
import Cart from "./components/Cart";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import FoodCategories from "./components/FoodMenu";

function App() {
  // const [cartItems, setCartItems] = useState([]);

  // // Add item to cart
  // const addToCart = (item) => {
  //   setCartItems((prev) => [...prev, item]);
  // };

  // // Remove item from cart
  // const removeFromCart = (itemId) => {
  //   setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  // };
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />

      <FoodCategories />
      {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
    </>
  );
}

export default App;
