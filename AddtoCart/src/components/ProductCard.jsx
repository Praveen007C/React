import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
