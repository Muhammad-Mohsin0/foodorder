import { useState } from "react";
import Cart from "./components/Cart";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

      {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
    </>
  );
}

export default App;
