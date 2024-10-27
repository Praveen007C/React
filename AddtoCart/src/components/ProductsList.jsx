import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ products, addToCart }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductsList;
