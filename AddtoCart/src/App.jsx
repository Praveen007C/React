import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import SearchBar from "./components/SearchBar";
import CartModal from "./components/CartModal";
import './App.css'; // Import your styles

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      alert("Item already added to the cart");
      return;
    }
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
    alert(`Total Amount: $${totalAmount}`);
    setCartItems([]); // Clear cart after checkout
    setIsCartOpen(false); // Close cart modal after checkout
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Navbar cartCount={cartItems.length} onCartToggle={() => setIsCartOpen(!isCartOpen)} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductsList products={filteredProducts} addToCart={addToCart} />
      {isCartOpen && (
        <CartModal 
          cartItems={cartItems} 
          onRemoveFromCart={removeFromCart} 
          onCheckout={handleCheckout} 
          onClose={() => setIsCartOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;
