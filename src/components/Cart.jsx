import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <section id="cart" className="cart-section">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </section>
  );
};

export default Cart;
