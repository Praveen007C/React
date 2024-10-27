import React from "react";

const Navbar = ({ cartCount, onCartToggle }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">E-commerce Store</h1>
      <button className="cart-button" onClick={onCartToggle}>
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
