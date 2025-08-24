import React from "react";

export default function Navbar({ cart = [] }) {
  const itemCount = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="http://localhost:3000/">
          Shoes Store
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="http://localhost:3000/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/categories">
               Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/contact">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="d-flex">
            <button className="btn btn-outline-light position-relative">
              🛒 Cart
              {itemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
