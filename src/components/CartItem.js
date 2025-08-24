import React from "react";

export default function CartItem({ item, increaseQuantity, decreaseQuantity, removeFromCart }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{item.name}</strong> - ${item.price} × {item.quantity}
      </div>
      <div>
        <button
          className="btn btn-sm btn-secondary me-2"
          onClick={() => decreaseQuantity(item.id)}
        >
          -
        </button>
        <button
          className="btn btn-sm btn-success me-2"
          onClick={() => increaseQuantity(item.id)}
        >
          +
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
}