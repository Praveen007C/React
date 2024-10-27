import React from 'react';

const CheckoutButton = ({ cartItems }) => {
  const handleCheckout = () => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    alert(`Total Amount: $${totalAmount.toFixed(2)}`);
  };

  return (
    <button className="checkout-button" onClick={handleCheckout}>
      Checkout
    </button>
  );
};

export default CheckoutButton;
