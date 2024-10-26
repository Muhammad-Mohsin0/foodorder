import React from "react";

const CategoryItem = ({ category, addToCart }) => {
  return (
    <div className="category-item">
      <img src={category.image} alt={category.name} />
      <h3>{category.name}</h3>
      <button onClick={() => addToCart(category)}>Add to Cart</button>
    </div>
  );
};

export default CategoryItem;
