import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ShoeList from "./components/ShoeList";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const shoes = [
    { id: 1, name: "Nike Air", price: 120, image: "https://www.pngarts.com/files/8/Air-Force-One-White-Nike-Shoes-PNG-Transparent-Image.png" },
    { id: 2, name: "Adidas UltraBoost", price: 150, image: "https://e7.pngegg.com/pngimages/245/660/png-clipart-sports-shoes-adidas-ultraboost-uncaged-adidas-ultra-boost-mens-3-limited-triple-black-sneakers-adidas.png" },
    { id: 3, name: "Puma Runner", price: 90, image: "https://wallpapers.com/images/hd/puma-ignite-running-shoe-blue-fizpn02y0cnf4hax.png" },
  ];

  // Add shoe to cart
  const addToCart = (shoe) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === shoe.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...shoe, quantity: 1 }];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item from cart completely
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar cart={cart} />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <ShoeList shoes={shoes} addToCart={addToCart} />
          </div>
          <div className="col-md-4">
            <Cart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
