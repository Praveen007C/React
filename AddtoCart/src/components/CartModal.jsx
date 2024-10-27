import React from "react";

const CartModal = ({ cartItems, onRemoveFromCart, onCheckout, onClose }) => {
  return (
    <div className="cart-modal">
      <button className="close-button" onClick={onClose}>X</button>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
              </div>
              <button className="remove-button" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      <button className="checkout-button" onClick={onCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default CartModal;
