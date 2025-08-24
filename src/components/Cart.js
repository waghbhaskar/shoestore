import React from "react";
import CartItem from "./CartItem";

export default function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const total = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  return (
    <div>
      <h2 className="mb-4">Shopping Cart</h2>
      <ul className="list-group list-group-flush">
        {cart.length === 0 && <li className="list-group-item">Cart is empty</li>}
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
      <h5 className="mt-3">Total: ${total}</h5>
    </div>
  );
}